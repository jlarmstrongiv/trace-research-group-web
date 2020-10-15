import styles from './News.module.scss';

const News = ({ news }) => {
  return (
    <React.Fragment>
      <h1 className={styles.heading}>Featured News</h1>
      {news.map((article, index) => (
        <React.Fragment key={article.title}>
          <div className={styles.container}>
            <h5 className={styles.title}>
              {article.title}
            </h5>
            <p className={styles.info}>
              {article.description}
            </p>
          </div>
          {index !== news.length - 1 ? (
            <hr className={styles.divider} />
          ) : null}
        </React.Fragment>
      ))}
    </React.Fragment>
  );
};

export default News;
