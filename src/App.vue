<template>
  <div id="app">
    <head>
        <title>Noah Jahn</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="assets/css/skeleton.css">
        <link rel="stylesheet" href="assets/css/custom.css">
        <link rel="icon" href="assets/img/favicon.ico">
        <link href="https://fonts.googleapis.com/css?family=PT+Sans" rel="stylesheet">
        <!-- <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script> -->
    </head>
    <body>
      <div class="container">
        <div class="row">
          <div class="one-third column">
            <div class="row">
              <div class="column">
                <Profile
                  name="Noah Jahn"
                  title="Senior Software Developer"
                  city="Grand Rapids"
                  stateInitial="MI"
                />
                &nbsp;
              </div>
            </div>
          </div>
          <div class="two-thirds column">
            <h4 class="custom primary"><b>EXPERIENCE</b></h4>
            <div>
            <h4 class="custom">
              <b>SPARK Business Works / </b><span><i>Software Developer</i></span>
            </h4>
            <h6 class="custom"><i>December 2019 - PRESENT, Grand Rapids, MI</i></h6>
            <ul>
              <li>
                Developed additional features with internal project management software written
                in PHP
              </li>
              <li>
                Implemented automated deployments client facing projects, integrating with
                GitLab CI/CD
              </li>
              <li>
                Performed application server migrations
              </li>
              <li>
                Implemented company-wide standards for creating and tagging resources in AWS
                (EC2, RDS, VPC, S3)
              </li>
              <li>
                Wrote non-technical guides on creating servers in AWS and setting up local
                development environments for future employees
              </li>
              <li>
                Worked on a team who built internal devops automation tools
              </li>
              <li>
                Managed groups of contractors and provided guidelines on application development
              </li>
            </ul>
          </div>
          <div>
            <h4 class="custom">
              <b>SPARK Business Works / </b><span><i>Systems Analyst</i></span>
            </h4>
            <h6 class="custom"><i>August 2018 - December 2019, Kalamazoo, MI</i></h6>
            <ul>
              <li>
                Responsible for quality assurance and acceptance testing of custom built web and
                mobile applications
              </li>
              <li>
                Read code to ensure features and bug fixes are implemented correctly
              </li>
              <li>
                Write code to provide simple fixes to applications
              </li>
              <li>
                Write documentation and provide guidance on REST API’s
              </li>
              <li>
                Architect and design system work-flows to relay to developers
              </li>
              <li>
                Implement DevOps practices: automated deployments, continuous integration, automated
                server setup up
              </li>
            </ul>
          </div>
          <div>
            <h4 class="custom">
              <b>CSM Group of Companies / </b><span><i>IT Technician</i></span>
            </h4>
            <h6 class="custom"><i>September 2017 - May 2019, Kalamazoo MI</i></h6>
            <ul>
              <li>
                Troubleshoot computer hardware, software, and cell phones
              </li>
              <li>
                Ensured security and usability of computers, email (Exchange Online), and networks
              </li>
              <li>
                Automated software installation and daily tasks with Python, Windows PowerShell, and
                Windows Batch scripts
              </li>
              <li>
                Managed Office 365 users and groups
              </li>
            </ul>
          </div>
          <div>
            <h4 class="custom">
              <b>Newkirk-Electric Associates Inc. / </b><span><i>IT Intern</i></span>
            </h4>
            <h6 class="custom"><i>July 2016 - August 2017, Muskegon MI</i></h6>
            <ul>
              <li>
                Troubleshoot computer hardware, software, tablets, and cell phones in person and
                over the phone
              </li>
              <li>
                Deployed new computers to users
              </li>
              <li>
                Ensured hardware inventory is up to date and document work done
              </li>
            </ul>
          </div>
          <div>
            <h4 class="custom">
              <b>Muskegon Community College OIT / </b><span><i>Student Technician</i></span>
            </h4>
            <h6 class="custom"><i>February 2016 - December 2017, Muskegon MI</i></h6>
            <ul>
              <li>
                Answered phone in a timely manner and create a ticket based on issue described by
                user
              </li>
              <li>
                Documented steps in ticket and in Knowledgebase if new issues arose
              </li>
              <li>
                Deployed new computers and desk phones.
              </li>
            </ul>
          </div>
          <h4 class="custom primary"><b>PROJECTS</b></h4>
          <div>
            <h4 class="custom">
              <b>api.noahjahn.dev / </b><span><i>Personal project</i></span>
            </h4>
            <h6 class="custom"><i>August 2020 - present</i></h6>
              <ul>
                <li>
                  Goal: become aware of how many visitors viewed my website and from where
                  <ul>
                    <li>
                      I also wanted to learn nodejs, expressjs, mongodb, and how to host them
                    </li>
                  </ul>
                </li>
                <li>
                  Implements JWT authorization
                </li>
                <li>
                  Implements creating and updating resources (visitors)
                </li>
                <li>
                  Uses docker-compose for local development
                </li>
                <li>
                  <a href="https://github.com/noahjahn/noahjahn.dev/tree/master/assets/js/api-noahjahn-dev">
                    A front-end wrapper
                  </a> for making http requests was also written for this project
                </li>
                <li>
                  <a href="https://github.com/noahjahn/api.noahjahn.dev">
                    Open source on GitHub
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 class="custom">
              <b>CSM Group IT Asset Manager / </b><span><i>Senior Design</i></span>
              </h4>
              <h6 class="custom">
                <i>January 2019 - December 2019, Western Michigan University</i>
              </h6>
              <ul>
              <li>
                Web application to make it easier for CSM Group to track IT assets. The system was
                built around speed using javascript, jquery, and datatables on the front end. The
                backend is written in PHP with the CodeIgniter framework.
              </li>
              <li>
                <a href="https://github.com/noahjahn/csmit-asset-manager">
                Open source on GitHub
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 class="custom">
              <b>Here Comes Treble Website / </b>
              <span><i>CS3500 Web Technologies Final Project</i></span>
            </h4>
            <h6 class="custom"><i>August 2018 - October 2018, Western Michigan University</i></h6>
            <ul>
              <li>
                Website for the Here Comes Treble Acapella group. Lists member information and event
                updates.
              </li>
              <li>
                <a href="https://github.com/noahjahn/herecomestreblewmu">
                  Open source on GitHub
                </a>
              </li>
              <li>
                <a href="https://herecomestreblewmu.noahjahn.dev">
                  Demo site
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 class="custom">
              <b>GPU Butter / </b>
              <span><i>CS4430 Database Management Systems Final Project</i></span>
            </h4>
            <h6 class="custom"><i>July 2018 - August 2018, Western Michigan University</i></h6>
            <ul>
              <li>
                Easily search for Graphics Cards based on the FPS of a select few games.
              </li>
              <li>
                <a href="https://github.com/noahjahn/wmu-gpu-butter">
                  Open source on GitHub
                </a>
              </li>
            </ul>
          </div>
          <h4 class="custom primary"><b>CERTIFICATIONS</b></h4>
          <div>
            <h4 class="custom">
              <b>AWS Certified Cloud Practitioner / </b><span><i>Amazon Web Services</i></span>
            </h4>
            <h6 class="custom"><i>September 26th, 2020 - September 26th, 2023</i></h6>
            <ul>
              <li>
                <a target="_blank" href="https://www.youracclaim.com/badges/10b761b4-ee7a-4ba3-b3d3-0fa5fe9fb7ae/public_url">
                  View certification details and verification
                </a>
              </li>
            </ul>
          </div>
          <h4 class="custom primary"><b>EDUCATION</b></h4>
          <div>
            <h4 class="custom">
              <b>Bachelor of Science in Computer Science</b>
            </h4>
            <h6 class="custom"><i>Graduated December, 2019</i></h6>
            <ul>
              <li>
                From Western Michigan University in Kalamazoo, Michigan
              </li>
              <li>
                3.26 GPA
              </li>
            </ul>
          </div>
          <div>
            <h4 class="custom">
              <b>Muskegon Community College</b>
            </h4>
            <h6 class="custom"><i>August  2015 - July 2017, Muskegon MI</i></h6>
            <ul>
              <li>
                Course work includes transferable credits for future education continuation at WMU.
              </li>
            </ul>
          </div>
          <div>
            <h4 class="custom">
              <b>Reeths-Puffer High School / </b><span><i>Diploma</i></span>
            </h4>
            <h6 class="custom"><i>September 2011 - June 2015, Muskegon MI</i></h6>
            </div>
          </div>
        </div>
      </div>
    </body>
  </div>
</template>

<script>
import Profile from './components/Profile.vue';

export default {
  name: 'App',
  components: {
    Profile,
  },
};
</script>

<style lang="scss">
@import '../node_modules/skeleton-scss/scss/skeleton.scss';
:root {
    --background: #E3E3E3;
    --background-dark: #151515;
    --text-primary: #616161;
    --text-primary-light: #E1E1E1;
    --text-secondary: #959595;
    --primary: #3B79C1;
    --complimentary: #c1833b;
  }

body {
    background-color: var(--background);
    color: var(--text-primary) !important;
    -webkit-transition: all 200ms linear;
    -moz-transition: all 200ms linear;
    -o-transition: all 200ms linear;
    transition: all 200ms linear;
}

body.dark {
    background-color: var(--background-dark);
}

.container {
    margin-top: 5em;
}

h1, h2, h3, h4, h5, h6 {
    margin-bottom: 0.5rem;
}

h4.custom {
    margin-bottom: 0 !important;
    font-size: 2.0rem !important;
    -webkit-transition: all 200ms linear;
    -moz-transition: all 200ms linear;
    -o-transition: all 200ms linear;
    transition: all 200ms linear;
}

h4.custom.dark {
    color: var(--text-primary-light);
}

h4.primary {
    color: var(--primary) !important;
}

h5.custom {
    color: var(--text-secondary) !important;
    font-size: 1.8rem !important;
    line-height: 1 !important;
}

h6.custom {
    color: var(--text-secondary) !important;
    margin-bottom: 0 !important;
    line-height: 1 !important;
}

.text-center {
    text-align: center;
}

ul {
    margin-top: 1rem;
    margin-left: 4rem;
    color: var(--text-secondary) !important;
    list-style: disc;
}

ul ul {
    margin-top: 0;
    margin-bottom: 0;
    color: var(--text-secondary) !important;
    list-style: circle;
}

ul li {
    line-height: 1.25;
    margin-bottom: 0;
}
</style>
