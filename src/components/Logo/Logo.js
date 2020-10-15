import React from 'react';

const Logo = () => (
  <React.Fragment>
    <style>
      {`
      body {
        margin: 0;
      }
      .wordmark {
        margin: 0 auto;
        grid-area: wordmark;
        filter: drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.7));
        width: 100%;
      }
      /*
      0: 1652.5
      1: 1561.53955078125
      2: 1637.8414306640625
      3: 1988.3338623046875
      4: 1318.5

      */
      /* One */
      .animate-path-one {
        stroke-dasharray: 1603, 50;
        animation: dash-one 5s linear infinite;
      }
      @keyframes dash-one {
        to {
          stroke-dashoffset: 1653;
        }
      }
      /* Two */
      .animate-path-two {
        stroke-dasharray: 1512, 50;
        animation: dash-two 5s linear infinite;
      }
      @keyframes dash-two {
        to {
          stroke-dashoffset: 1562;
        }
      }
      /* Three */
      .animate-path-three {
        stroke-dasharray: 1588, 50;
        animation: dash-three 5s linear infinite;
      }
      @keyframes dash-three {
        to {
          stroke-dashoffset: 1638;
        }
      }
      /* Four */
      .animate-path-four {
        stroke-dasharray: 1269, 50;
        animation: dash-four 5s linear infinite;
      }
      @keyframes dash-four {
        to {
          stroke-dashoffset: 1319;
        }
      }
      /* Five */
      .animate-path-five {
        stroke-dasharray: 2013, 50;
        animation: dash-five 5s linear infinite;
      }
      @keyframes dash-five {
        to {
          stroke-dashoffset: 2063;
        }
      }

      .logoContainer {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
      }

      @media screen and (min-width: 1200px) {
        .wordmark {
          transform: scale(1.5);
          width: auto;
        }
      }
      `}
    </style>
    <div className="logoContainer">
      <svg
        className="wordmark"
        width="628"
        height="152"
        viewBox="0 0 628 152"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="animate-path animate-path-one"
          d="M627 147H529V139H627V131H529V123H627V115H529V107H569V99H529V91H623V83H529V75H623V67H529V59H569V51H529V43H627V35H529V27H627V19H529V10.5H627"
          stroke="white"
          strokeWidth="2"
        />
        <path
          className="animate-path animate-path-two"
          d="M473 151C487 151 495.833 148.333 498.5 147H444.5C438.5 145.8 430 141.167 426.5 139H515V131H416C413.2 129 410.167 124.833 409 123H515V115H403.231C401.815 112.6 400.154 108.667 399.5 107H459C455 106.2 450 101.333 448 99H397C395.8 94.6 395.5 91.8333 395.5 91H443.5C442.7 88.2 442.064 84.5 441.847 83H394.787C394.616 81.4 394.524 77 394.5 75H441.847C442.124 72.6 443.064 68.6667 443.5 67H395.5C395.5 65.4 396.5 61 397 59H448C451.2 55 456.333 52 458.5 51H399.5C400.7 47.4 402.667 44.1667 403.5 43H515V35H408.5C410.5 31.8 414.333 28.3333 416 27H515V19H426.5C430.667 16.3333 439.9 11 443.5 11C447.1 11 482 11 499 11C496 9.66667 486.6 7 473 7"
          stroke="white"
          strokeWidth="2"
        />
        <path
          className="animate-path animate-path-three"
          d="M255.5 147H409L405 139H260L264 131H400.5L396 123H268.5L272.5 115H392.5L388 107H277L281.5 99H383.5L379.5 91H285.5L289.5 83H375.5L371 75H293.5L298 67H367L363 59H302L306 51H359L354.5 43H310.5L314.5 35H350.5L346 27H319L323 19H342L337.5 11H327L332.5 1"
          stroke="white"
          strokeWidth="2"
        />
        <path
          className="animate-path animate-path-four"
          d="M81.5 147H39.5V139H81.5V131.5H39.5V123H81.5V116H39.5V107.5H81.5V99H39.5V91.5H81.5V83H39.5V74.5H81.5V67H39.5V59H81.5V51.5H1V43.5H120.5V35.5H1V27H120.5V19H1V10.5H120.5"
          stroke="white"
          strokeWidth="2"
        />
        <path
          className="animate-path animate-path-five"
          d="M134 147H256.5L251 139H134V131H246L240.5 123H134V115H235L230 107H134V99H224.5C226.167 98.1667 230.6 95.4 235 91H134V83H241.5C242.333 82 244.3 79 245.5 75H134V67H247.5C247.833 66 248.5 63 248.5 59H134V51H248C247.833 49.3333 247.3 45.4 246.5 43H134V35H243.5C242.667 33.5 240.4 29.8 238 27H134V19H228C225.333 17 216.2 12.6 201 11H134"
          stroke="white"
          strokeWidth="2"
        />
      </svg>
    </div>
  </React.Fragment>
);

export default Logo;
