import React from "react";
import PropTypes from "prop-types";

import { FaLinkedin } from "react-icons/fa/";
import { FiMail } from "react-icons/fi/";

const Hero = props => {
  const { backgrounds, theme } = props;

  return (
    <React.Fragment>
      <section className="hero">
        <h1> Stella Kurniawan </h1>
        <p>
          Product manager with end-to-end experience in Product Design, Product Management, and Product Development for Consumer and Enterprise Product in diverse industries (Human Resource and Fashion).
        </p>
        <h1>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/stellakurniawan"
          >
            <FaLinkedin size={30} />
          </a>
          <a href="mailto:stella.kurniawan93@gmail.com">
            <FiMail size={30} />
          </a>
        </h1>
      </section>

      {/* --- STYLES --- */}
      <style jsx>{`
        .hero {
          align-items: center;
          background: ${theme.hero.background};
          background-image: url(${backgrounds.mobile});
          background-size: cover;
          color: ${theme.hero.text.color};
          display: flex;
          flex-flow: column nowrap;
          justify-content: flex-start;
          min-height: 100vh;
          height: 100px;
          padding: ${theme.space.inset.l};
          padding-top: 160px;
        }

        h1 {
          text-align: center;
          font-size: ${theme.hero.h1.size};
          margin: ${theme.space.stack.m};
          color: ${theme.hero.h1.color};
          line-height: ${theme.hero.h1.lineHeight};
          text-remove-gap: both 0 "Open Sans";

          :global(strong) {
            position: relative;

            &::after,
            &::before {
              content: "›";
              color: ${theme.text.color.attention};
              margin: 0 ${theme.space.xs} 0 0;
              text-shadow: 0 0 ${theme.space.s} ${theme.color.neutral.gray.k};
            }
            &::after {
              content: "‹";
              margin: 0 0 0 ${theme.space.xs};
            }
          }
        }

        a {
          margin: 0 3px 0 3px;
        }

        p {
          text-align: center;
          margin: 0 0 20px 0;
        }

        button {
          background: ${theme.background.color.brand};
          border: 0;
          border-radius: 50%;
          font-size: ${theme.font.size.m};
          padding: ${theme.space.s} ${theme.space.m};
          cursor: pointer;
          width: ${theme.space.xl};
          height: ${theme.space.xl};

          &:focus {
            outline-style: none;
            background: ${theme.color.brand.primary.active};
          }

          :global(svg) {
            position: relative;
            top: 5px;
            fill: ${theme.color.neutral.white};
            stroke-width: 40;
            stroke: ${theme.color.neutral.white};
            animation-duration: ${theme.time.duration.long};
            animation-name: buttonIconMove;
            animation-iteration-count: infinite;
          }
        }

        @keyframes buttonIconMove {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0);
          }
        }

        @from-width tablet {
          .hero {
            background-image: url(${backgrounds.tablet});
          }

          h1 {
            max-width: 90%;
            font-size: ${`calc(${theme.hero.h1.size} * 1.3)`};
          }

          p {
            margin: 0 100px 20px 100px;
          }

          button {
            font-size: ${theme.font.size.l};
          }
        }

        @from-width desktop {
          .hero {
            background-image: url(${backgrounds.desktop});
            padding-top: 260px;
          }

          h1 {
            max-width: 80%;
            font-size: ${`calc(${theme.hero.h1.size} * 1.5)`};
          }

          p {
            margin: 0 150px 20px 150px;
          }

          button {
            font-size: ${theme.font.size.xl};
          }
        }
      `}</style>
    </React.Fragment>
  );
};

Hero.propTypes = {
  scrollToContent: PropTypes.func.isRequired,
  backgrounds: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default Hero;
