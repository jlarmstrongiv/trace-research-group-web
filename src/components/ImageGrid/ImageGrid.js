import Link from 'next/link';
import styles from './ImageGrid.module.scss';

const CustomLink = ({ href, as, children }) => {
  const isExternalLink = href.indexOf('http') === 0;

  if (isExternalLink) {
    return <a href={href}>{children}</a>;
  }
  return (
    <Link href={href} as={as}>
      <a>{children}</a>
    </Link>
  );
};

const ImageGrid = ({ images, cta }) => {
  return (
    <React.Fragment>
      <ul className={styles.container}>
        {images.map(({ image, alt, href, as }, index) => (
          <li key={as}>
            <CustomLink href={href} as={as}>
              <div className={styles.list}>
                <img
                  className={styles.avatar}
                  src={image}
                  alt={alt}
                />
              </div>
            </CustomLink>
          </li>
        ))}
        {cta}
      </ul>
    </React.Fragment>
  );
};

ImageGrid.CallToAction = ({ children, href }) => {
  return (
    <Link href={href}>
      <a className={styles.callToAction}>{children}</a>
    </Link>
  );
};

export default ImageGrid;
