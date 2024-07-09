import React from 'react'
import PixeeBanner from '../../../assets/Blog/pixee.jpg'
import Date from '../../../assets/icons/calender.svg'
import User from '../../../assets/icons/user.svg'
import Category from '../../../assets/icons/category.svg'
import Installation_step_1 from '../../../assets/Blog/step1.png'
import Installation_step_2 from '../../../assets/Blog/step2.png'
import Dashboard from '../../../assets/Blog/dashboard.png'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

function Pixee() {
const codeString =
`name: "Publish Sonar JSON to Pixee"
on:
  check_run:
    types: [completed]
permissions:
  contents: read
  id-token: write
jobs:
  share:
    name: Upload Sonar Results to Pixeebot
    runs-on: ubuntu-latest
    if: \${{ github.event.check_run.name == 'SonarCloud Code Analysis' }}
    steps:
      - uses: pixee/upload-tool-results-action@v1.1.1
        with:
          tool: sonar
          sonar-token: \${{ secrets.SONAR_TOKEN }}
          sonar-component-key: \${{ secrets.SONAR_COMPONENT_KEY }}`;
const pickle_change =
`- import pickle
+ import fickling
- data = pickle.load(file)
+ data = fickling.load(file)`;
const jinja =
`- env = Environment()
- env = Environment(autoescape=False)
+ env = Environment(autoescape=True)`;
const Parameterize_SQL_Queries =
`- query = "SELECT Answer FROM chat_answers WHERE Answer LIKE '%" + user_input + "%'"  
- cursor.execute(query)
- store_query = f"INSERT INTO chat_answers (Answer) VALUES ('{response}')"  
- cursor.execute(store_query)`;
const Parameterize_SQL_Queries_Response =
`+ query = "SELECT Answer FROM chat_answers WHERE Answer LIKE ?" 
+ cursor.execute(query, ('%{0}%'.format(user_input), ))
+ store_query = "INSERT INTO chat_answers (Answer) VALUES (?)" 
+ cursor.execute(store_query, (response, ))`;

    return (
        <div className='text-white blog-container my-10 mx-5'>
            <div className='blog_banner max-w-full'>
                <div className="blog_section flex flex-col items-center justify-center">
                    <div className="banner_image ">
                        <img src={PixeeBanner} alt="Banner.png" className='w-full max-w-6xl h-auto object-cover' />
                        <div className="banner_footer mt-4 flex items-center md:gap-4 gap-2">
                            <div className="date flex items-center">
                                <div className="icon pr-2"><img src={Date} className='h-5' alt="" /></div>
                                <div className='text-sm'>09 July, 2024</div>
                            </div>
                            <div className="user flex items-center">
                                <div className="icon pr-2"><img src={Category} className='h-5' alt="" /></div>
                                <div className='text-sm'>Ahmar Aamir</div>
                            </div>
                            <div className="category flex items-center">
                                <div className="icon pr-2"><img src={User} className='h-5' alt="" /></div>
                                <div className='text-sm'>DevSecOps</div>
                            </div>
                        </div>
                    </div>
                    <div className="banner_content mt-10 w-full max-w-6xl">
                        <p className='mb-3'>
                            In the world of software development, the only truly scalable solution for maintaining secure code is to have a security expert on every development team. These experts can harden code and fix vulnerabilities as quickly as developers produce it. However, the reality is that there simply aren't enough individuals with a deep understanding of security risks and coding practices required to fill these roles. At Rapid Labs, we faced this challenge head-on. Confronted with a critical security breach that could have compromised our application, we turned to <a href="https://www.pixee.ai/" className='text-blue-600 dark:text-blue-500 hover:underline'>Pixee.ai</a>. With our commitment to delivering robust and secure solutions, we found Pixeebot a reliable and efficient code security tool that steps in as our virtual product security engineer, always present and proactively hardening our code. It advises on pull requests and responds to scans that detect vulnerabilities. Unlike traditional tools that generate extensive reports, Pixeebot communicates directly in code and provides actionable insights and solutions.
                        </p>
                        <h2 className='text-2xl font-semibold mb-2'>
                            The Power of Pixeebot: Your Virtual Security Engineer
                        </h2>
                        <p className='mb-3'>
                            Built as a GitHub App, Pixeebot is designed to boost developer productivity and eliminate backlog items by doing more than just identifying flaws. It acts like a coding partner that allows developers to focus solely on coding while Pixeebot takes care of security concerns. Powered by the open-source Codemodder framework, Pixeebot automates code changes and makes advanced security engineering accessible to teams of all sizes.
                        </p>
                        <h2 className='text-2xl font-semibold mb-2'>
                            Real-World Applications at Rapid Labs
                        </h2>
                        <p className='mb-3'>
                            We have integrated Pixee into our Rapid Labs GitHub and applied it to our two active Python projects: <a href="https://github.com/ahmar-rapidlabs/Cardio-Chatbot/" className='text-blue-600 dark:text-blue-500 hover:underline'>Cardio-Chatbot</a> and <a href="https://github.com/ahmar-rapidlabs/CRM" className='text-blue-600 dark:text-blue-500 hover:underline'>CRM</a>. The CRM project focuses on developing a comprehensive customer relationship management system to meet our specific business needs. Conversely, the Cardio Chatbot project aims to create an AI-driven chatbot to assist patients in monitoring cardiovascular health, providing personalized advice, and facilitating appointment scheduling. Both projects are currently in active development on GitHub.
                        </p>
                        <h2 className='text-2xl font-semibold mb-2'>
                            Initial Application Security Efforts and the Need for Evolution
                        </h2>
                        <p className='mb-1'>
                            At Rapid Labs, our initial application security efforts were limited. Before integrating  Pixee.ai, we relied heavily on manual code reviews, and basic static analysis tools to identify and  address security issues. While these methods provided a baseline level of security, they were time-consuming, prone to human error, and often missed some vulnerabilities.
                        </p>
                        <p className='mb-1'>
                            To automate our manual efforts, we used the <a href="https://www.sonarsource.com/products/sonarcloud/" className='text-blue-600 dark:text-blue-500 hover:underline'>SonarCloud</a> for static code analysis.  SonarCloud helped us identify some code smells, bugs, and vulnerabilities, but it had its  limitations. One major drawback was that SonarCloud did not automatically generate pull  requests and fix issues when it found vulnerabilities. Instead, our developers had to sift through  extensive reports to pinpoint actionable insights and manually create pull requests to address  the issues, which added to their workload and slowed down the development process.
                        </p>
                        <p className='mb-3'>
                            Despite these efforts, we recognized that our approach was not scalable and left room for  significant improvement. We needed a more automated and efficient solution to ensure our  code remained secure and high-quality without overburdening our development team.
                        </p>
                        <h2 className='text-2xl font-semibold mb-2'>
                            Transformative Change with Pixeebot Integration
                        </h2>
                        <p className='mb-3'>
                            With the integration of Pixeebot in our GitHub repositories, our application security practices took a transformative change. This feature streamlined our workflow by eliminating the need for manual intervention in many cases. Instead of developers spending valuable time going through extensive reports and manually fixing issues, Pixeebot provided real-time, actionable insights directly within our codebase, such as identifying security vulnerabilities, suggesting code optimizations, and highlighting potential bugs for immediate resolution.
                        </p>
                        <h2 className='text-2xl font-semibold mb-2'>
                            Installation and setup of Pixee.ai
                        </h2>
                        <div className="para mb-3">
                            <p className='mb-3'>
                                The <a href="https://docs.pixee.ai/installing/" className='text-blue-600 dark:text-blue-500 hover:underline'>installation</a> of Pixee.ai in our GitHub repository was straightforward. Here are the steps we followed:
                            </p>
                            <div className="installation_steps_list">
                                <ol className='mt-1'>
                                    <li className='mb-1'>
                                        <p>1. We registered for an account on Pixee.ai and installed it on our GitHub profile.</p>
                                    </li>
                                    <li>
                                        <p>2. We connected our CRM and Cardio-Chatbot repositories into pixee.ai and granted necessary permissions.</p>
                                    </li>
                                </ol>
                            </div>

                            <div className="installation_step flex flex-col md:flex-row md:items-end md:gap-4 items-center justify-center mt-8 mb-4">
                                <div className="step1">
                                    <img src={Installation_step_1} alt="" className='w-full max-w-md h-auto rounded-md' />
                                </div>
                                <div className="step2 mt-5 md:mt-0">
                                    <img src={Installation_step_2} alt="" className='w-full max-w-md h-[405px] rounded-md' />
                                </div>
                            </div>
                            The integration of Pixeebot into our GitHub repositories brought a new level of automation and intelligence to our security processes. Pixeebot's algorithms scanned our codebase for vulnerabilities, code smells, and other potential issues. Whenever Pixeebot detected any issues, it proactively created a pull request with suggested fixes. These pull requests were ready for our developers to review and merge. This automation not only enhanced our security posture by ensuring that vulnerabilities were promptly addressed but also increased our overall development efficiency.
                        </div>
                        <h2 className='text-2xl font-semibold mb-2'>
                            Integration Options
                        </h2>
                        <p className='mb-3'>
                            To fully leverage Pixee.ai, we explored its integration capabilities with other tools such as SonarCloud, Semgrep, and CodeQL. After thorough research and evaluation of our project’s functionalities, we opted to integrate Pixee.ai with SonarCloud. This integration allowed us to leverage SonarCloud's advanced static analysis capabilities alongside Pixee.ai's automated pull request generation. The combined use of these tools provided a holistic view of our codebase’s security and quality.
                        </p>
                        <h2 className='text-2xl font-semibold mb-2'>
                            Gaining Insights Through the Pixeebot Dashboard
                        </h2>
                        <p className='mb-3'>
                            The initial assessment of our project's security posture through Pixee.ai Dashboard was eye-opening. The Pixee.ai dashboard provided a comprehensive overview of the identified vulnerabilities, categorized by severity and impact. This initial scan revealed several critical issues that required immediate attention including outdated dependencies, potential security issues, and vulnerabilities
                        </p>
                        <div className="dashboard-img flex justify-center mt-8">
                            <img src={Dashboard} alt="" className='max-w-full h-auto' />
                        </div>
                        <div className='dashboard_feature_list mt-8 mb-4'>
                            <ol>
                                <li className='mb-1'><p><i>1. This dashboard provided immediate feedback on the security status of our codebase.  Developers received real-time insights for any detected vulnerabilities.</i></p></li>
                                <li className='mb-1'><p><i>2. The Security issues were categorized by risk level (High, med, low). This categorization helped in focusing on the most critical (high risk) vulnerabilities first.</i></p></li>
                                <li className='mb-1'><p><i>3. This dashboard provided us insights such as which issues in pull requests are open, closed and completed with interactive graphs and other metrics.</i></p></li>
                                <li><p><i>4. Each identified issue came with detailed reports, including the nature of the vulnerability, its potential impact, and suggested solutions. This helps our Rapid lab’s team to learn more about the vulnerabilities and their solutions.</i></p></li>
                            </ol>
                        </div>
                        <h2 className='text-2xl font-semibold mb-2'>
                            Integration Process
                        </h2>
                        <p>
                            We configured GitHub actions to enable the Pixee Sonar <a href="https://github.com/marketplace/actions/upload-tool-results-to-pixeebot" className='text-blue-600 dark:text-blue-500 hover:underline'>Upload Action</a> on our projects by  creating a new GitHub workflow action in our repositories. You can see the example <a href=" https://github.com/pixee/codemodder-python/blob/main/.github/workflows/sonar_pixee.yml" className='text-blue-600 dark:text-blue-500 hover:underline'>here</a>.
                        </p>
                        <div className="Integration_process_snippet mb-3 ">
                            <SyntaxHighlighter language='yaml' style={dracula}>
                                {codeString}
                            </SyntaxHighlighter>
                        </div>
                        <p>
                            After configuring Pixee SONAR upload actions, every SONAR identified issue was addressed  through automated pull requests by Pixeebot. We then validated the integration by making  code changes and observing the automated process of issue detection and resolution.
                        </p>
                        <div className="results_findings my-4">
                            <h2 className='text-2xl font-semibold mb-2'>
                                Results and Findings
                            </h2>
                            <p>
                                The integration of Pixee.ai had a profound impact on our code security. The automated pull  requests addressed critical hotspots and code smells, leading to a more secure and  maintainable codebase. The collaboration between Pixee.ai and SonarCloud ensured  comprehensive coverage of security issues, both at the surface level and deeper within the  code. The table below shows some of the issues discovered using these tools during our  development process.
                            </p>
                            <div className="flex flex-col">
                                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                                        <div className="overflow-hidden">
                                            <table
                                                className="min-w-full text-left text-sm font-light text-surface dark:text-white">
                                                <thead
                                                    className="border-b border-neutral-200 font-medium dark:border-white/10">
                                                    <tr>
                                                        <th scope="col" className="px-6 py-4">Issue</th>
                                                        <th scope="col" className="px-6 py-4">Repository</th>
                                                        <th scope="col" className="px-6 py-4">Importance</th>
                                                        <th scope="col" className="px-6 py-4">Requires Scanning Tool</th>
                                                        <th scope="col" className="px-6 py-4">PR Status</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr className="border-b border-neutral-200 dark:border-white/10">
                                                        <td className="whitespace-nowrap px-6 py-4">
                                                            Replace Deprecated <code>`logging.warn`</code>

                                                        </td>
                                                        <td className="whitespace-nowrap px-6 py-4">
                                                            CRM
                                                        </td>
                                                        <td className="whitespace-nowrap px-6 py-4">Low</td>
                                                        <td className="whitespace-nowrap px-6 py-4">No</td>
                                                        <td className="whitespace-nowrap px-6 py-4">Merged Without Review</td>
                                                    </tr>
                                                    <tr className="border-b border-neutral-200 dark:border-white/10">
                                                        <td className="whitespace-nowrap px-6 py-4">
                                                            Disable Django <code>`Debug`</code> Mode
                                                        </td>
                                                        <td className="whitespace-nowrap px-6 py-4">CRM</td>
                                                        <td className="whitespace-nowrap px-6 py-4">Medium</td>
                                                        <td className="whitespace-nowrap px-6 py-4">No</td>
                                                        <td className="whitespace-nowrap px-6 py-4">Merged After Cursory Review</td>
                                                    </tr>
                                                    <tr className="border-b border-neutral-200 dark:border-white/10">
                                                        <td className="whitespace-nowrap px-6 py-4">
                                                            Remove <code>`global`</code> Usage at  Module Leve
                                                        </td>
                                                        <td className="whitespace-nowrap px-6 py-4">CRM</td>
                                                        <td className="whitespace-nowrap px-6 py-4">Low</td>
                                                        <td className="whitespace-nowrap px-6 py-4">No</td>
                                                        <td className="whitespace-nowrap px-6 py-4">Merged Without Review</td>
                                                    </tr>
                                                    <tr className="border-b border-neutral-200 dark:border-white/10">
                                                        <td className="whitespace-nowrap px-6 py-4">
                                                            Enable Jinja2 Auto escape
                                                        </td>
                                                        <td className="whitespace-nowrap px-6 py-4">CRM</td>
                                                        <td className="whitespace-nowrap px-6 py-4">High</td>
                                                        <td className="whitespace-nowrap px-6 py-4">Yes (Sonar)</td>
                                                        <td className="whitespace-nowrap px-6 py-4">Merged After Review</td>
                                                    </tr>
                                                    <tr className="border-b border-neutral-200 dark:border-white/10">
                                                        <td className="whitespace-nowrap px-6 py-4">
                                                            Secure Source of Randomness

                                                        </td>
                                                        <td className="whitespace-nowrap px-6 py-4">CRM</td>
                                                        <td className="whitespace-nowrap px-6 py-4">High</td>
                                                        <td className="whitespace-nowrap px-6 py-4">Yes (Sonar)</td>
                                                        <td className="whitespace-nowrap px-6 py-4">Merged After Cursory Review</td>
                                                    </tr>
                                                    <tr className="border-b border-neutral-200 dark:border-white/10">
                                                        <td className="whitespace-nowrap px-6 py-4">
                                                            Harden <code>`pickle.load()`</code> against deserialization  attacks

                                                        </td>
                                                        <td className="whitespace-nowrap px-6 py-4">Cardio Chatbot</td>
                                                        <td className="whitespace-nowrap px-6 py-4">High</td>
                                                        <td className="whitespace-nowrap px-6 py-4">No</td>
                                                        <td className="whitespace-nowrap px-6 py-4">Closed</td>
                                                    </tr>
                                                    <tr className="border-b border-neutral-200 dark:border-white/10">
                                                        <td className="whitespace-nowrap px-6 py-4">
                                                            Parameterize SQL Queries
                                                        </td>
                                                        <td className="whitespace-nowrap px-6 py-4">Cardio Chatbot</td>
                                                        <td className="whitespace-nowrap px-6 py-4">High</td>
                                                        <td className="whitespace-nowrap px-6 py-4">Yes (Sonar)</td>
                                                        <td className="whitespace-nowrap px-6 py-4">Merged After Cursory Review</td>
                                                    </tr>
                                                    <tr className="border-b border-neutral-200 dark:border-white/10">
                                                        <td className="whitespace-nowrap px-6 py-4">
                                                            Removed break or continue statement out of loop
                                                        </td>
                                                        <td className="whitespace-nowrap px-6 py-4">Cardio Chatbot</td>
                                                        <td className="whitespace-nowrap px-6 py-4">Low</td>
                                                        <td className="whitespace-nowrap px-6 py-4">Yes (Sonar)</td>
                                                        <td className="whitespace-nowrap px-6 py-4">Merged without Review</td>
                                                    </tr>
                                                    <tr className="border-b border-neutral-200 dark:border-white/10">
                                                        <td className="whitespace-nowrap px-6 py-4">
                                                            Secure Setting for Django <code>`SESSION_COOKIE_SECURE`</code>  flag
                                                        </td>
                                                        <td className="whitespace-nowrap px-6 py-4">Cardio Chatbot</td>
                                                        <td className="whitespace-nowrap px-6 py-4">Medium</td>
                                                        <td className="whitespace-nowrap px-6 py-4">No</td>
                                                        <td className="whitespace-nowrap px-6 py-4">Merged After Review</td>
                                                    </tr>
                                                    <tr className="border-b border-neutral-200 dark:border-white/10">
                                                        <td className="whitespace-nowrap px-6 py-4">
                                                            Ensure Django Model Classes Implement a <code>`__str__`</code> Method

                                                        </td>
                                                        <td className="whitespace-nowrap px-6 py-4">Cardio Chatbot</td>
                                                        <td className="whitespace-nowrap px-6 py-4">Low</td>
                                                        <td className="whitespace-nowrap px-6 py-4">Yes (Sonar)</td>
                                                        <td className="whitespace-nowrap px-6 py-4">Merged Without Review</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="deep_details">
                            <p className='text-lg mb-1.5'>In our Cardio-Chatbot repository: </p>
                            <p>Pixeebot detected an issue titled "Harden <code>`pickle.load()`</code> against deserialization attacks" and  opened a new PR (<a href='https://github.com/ahmar-rapidlabs/Cardio-Chatbot/pull/5' className='text-blue-600 dark:text-blue-500 hover:underline'>#5</a>) to address it. The bot highlighted that Python's pickle module is  notoriously insecure because it can execute arbitrary code when loading data, making it unsafe  to use with untrusted sources. To mitigate this risk, Pixeebot recommended avoiding pickle and  using safer serialization formats like JSON or YAML. However, if pickle must be used, Pixeebot  suggested using the fickling library, a safer alternative that validates data before loading it. Although this PR and fix were correct and addressed the issue, given our team's priorities on improving the ML models, we have closed it for now. We may revisit it in the future.</p>
                            <div className="pickle_code">
                                <SyntaxHighlighter language='python' style={dracula}>
                                    {pickle_change}
                                </SyntaxHighlighter>
                            </div>
                            <p className='mb-3'>
                                Pixeebot's <a href="https://docs.pixee.ai/codemods/overview/" className='text-blue-600 dark:text-blue-500 hover:underline'>codemod</a> automatically replaced calls to <code>`pickle.load()`</code> with <code>`fickling.load()`</code> in the Python  code and added the necessary import statement for fickling.
                            </p>
                            <p className='text-lg mb-1.5'>In our CRM repository: </p>
                            <p>
                                SonarCloud identified two security hotspots in the pull request (<a href="https://github.com/ahmar-rapidlabs/CRM/pull/18" className='text-blue-600 dark:text-blue-500 hover:underline'>#18</a>) in our CRM, prompting  Pixeebot to open a new pull request (<a href="https://github.com/ahmar-rapidlabs/CRM/pull/18" className='text-blue-600 dark:text-blue-500 hover:underline'>#19</a>) "Hardening Suggestions for CRM / dev_security." These hotspots were related to enabling Jinja2 autoescape. According to the Sonar rule  <code>`python:S5247`</code>, the default behavior of Jinja2 is to not autoescape HTML content when  rendering templates, making applications potentially vulnerable to Cross-Site Scripting (XSS)  attacks. Pixeebot's codemod addressed this by enabling autoescaping in Jinja2, thereby  mitigating the risk of XSS vulnerabilities and enhancing the security of our application.
                            </p>
                            <div className="jinja">
                                <SyntaxHighlighter language='python' style={dracula}>
                                    {jinja}
                                </SyntaxHighlighter>
                            </div>
                            <p>
                                We reviewed the hardening suggestions made by Pixeebot in PR (<a href='https://github.com/ahmar-rapidlabs/Cardio-Chatbot/pull/19' className='text-blue-600 dark:text-blue-500 hover:underline'>#19</a>), found them beneficial,  and subsequently merged the changes into our main branch. After merging, Pixeebot deleted  the branch to keep our repository clean and organized.
                            </p>
                        </div>
                        <div className="more_details mt-4">
                            <p>
                                Furthermore, SonarCloud identified two security hotspots and assigned an E security rating to the new code in PR  (<a href='https://github.com/ahmar-rapidlabs/Cardio-Chatbot/pull/12' className='text-blue-600 dark:text-blue-500 hover:underline'>#12</a>). These code snippets can be a potential threat to code secuirty:
                            </p>
                            <div className="Parameterize_SQL_Queries_Code">
                                <SyntaxHighlighter language='python' style={dracula}>
                                    {Parameterize_SQL_Queries}
                                </SyntaxHighlighter>
                            </div>
                            <p>
                                In response, Pixeebot opened a new PR (<a href="https://github.com/ahmar-rapidlabs/Cardio-Chatbot/pull/13" className='text-blue-600 dark:text-blue-500 hover:underline'>#13</a>) to address these issues. The hotspots were  related to the need to parameterize SQL queries, as per Sonar rule <code>pythonsecurity:S3649</code>.  Pixeebot's codemod refactored SQL statements to be parameterized rather than built by hand.
                            </p>
                            <div className="Parameterize_SQL_Queries_Code_Response">
                                <SyntaxHighlighter language='python' style={dracula}>
                                    {Parameterize_SQL_Queries_Response}
                                </SyntaxHighlighter>
                            </div>
                            <p>
                                Without parameterization, our developers would have to manually escape string inputs  according to the rules for the column type and database which often results in bugs and  vulnerabilities. This change makes the code more robust, ensuring that it remains secure even if  the conditions preventing exploitation today change in the future.
                            </p>
                        </div>
                        <div className="Challenges_resolutions mt-4">
                            <h2 className='text-2xl font-semibold mb-2'>
                                Challenges and Resolutions
                            </h2>
                            During the implementation, we encountered a few challenges:
                            <div className="challenges_list mt-1.5">
                                <ul className='space-y-1.5 list-disc list-inside'>
                                    <li><i>Initially, there were conflicts between Pixee.ai and SonarCloud settings, which were  resolved by fine-tuning the configuration and installing SonarCloud in GitHub Actions.</i></li>
                                    <li><i>Some findings were false positives, which required manual verification and adjustment  of the analysis rules</i></li>
                                </ul>
                            </div>
                        </div>
                        <div className="success_and_insights mt-4">
                            <h2 className='text-2xl font-semibold mb-2'>
                                Successes and Insights
                            </h2>
                            <p className='mb-1.5'>Despite the challenges, the implementation of Pixee.ai was a success. The Key insights we gained include:</p>
                            <div className="sucess_list">
                                <ul className='space-y-1.5 list-disc list-inside'>
                                    <li><i>The automation of pull requests significantly reduced the time spent on manual code  reviews which increased overall development efficiency.</i></li>
                                    <li><i>The combination of Pixee.ai and SonarCloud led to a noticeable improvement in code  quality and security.</i></li>
                                    <li><i>The tools provided continuous monitoring and improvement of the codebase to ensure  long term security benefits.</i></li>
                                </ul>
                            </div>
                        </div>
                        <div className="Wrapping_up mt-4">
                            <h2 className='text-2xl font-semibold mb-2'>
                                Wrapping it all up
                            </h2>
                            <p>
                                Integrating Pixee.ai into our Rapid Labs CRM and Cardio-Chatbot project has been a  transformative experience. The automation of pull requests and the comprehensive analysis  provided by SonarCloud have significantly enhanced our code security and quality. This  combination has not only streamlined our development process but also ensured that our  codebase remains robust and secure.
                            </p>
                            <p className='my-1.5'>
                                Moreover, we have set a new standard for our appsec efforts by demonstrating the power of  automation in modern software development. We look forward to continuing our journey with  Pixee.ai and exploring further innovations to maintain the highest standards of code excellence. </p>
                            <p>
                                In summary, Pixee.ai has been an invaluable addition to our Rapid Labs CRM project. Its ability  to automatically detect and fix code issues, along with the detailed analysis from SonarCloud,  has greatly improved our code security and development process. We highly recommend  Pixee.ai to any development team looking to enhance their code quality and security through  automation.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pixee
