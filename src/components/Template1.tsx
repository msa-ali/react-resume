import { PDFViewer, Document, Page, Text, View, Link } from "@react-pdf/renderer";
import PdfBulletList from "./PdfList";
import { caption, title, tw, subtitle, description } from "../createTw";

const Template1 = () => {
    return (
        <div className="flex flex-col justify-center items-center">
            <PDFViewer width="80%" height="900px">
                <Document>
                    <Page size='A4' style={tw("mx-12 my-16 flex flex-row")} wrap={false}>
                        <View style={tw('w-3/4 flex flex-col gap-10 mr-2')}>
                            <View style={tw("flex flex-col gap-3 flex-wrap")}>
                                <Text style={tw("w-2/3")}>
                                    Md Sultan Altamash Ali, Full Stack Software Engineer
                                </Text>
                                <View style={tw("flex flex-row gap-2 items-center pl-0 text-gray-400")}>
                                    <Text style={tw('text-xs')}>BENGALURU, INDIA</Text>
                                    <Text style={tw('text-xs')}>|</Text>
                                    <Link src={`mailto:altamashattari786@gmail.com`} style={tw('text-xs no-underline text-gray-400')}>altamashattari786@gmail.com</Link>
                                    <Text style={tw('text-xs')}>|</Text>
                                    <Link src={`tel:9945578308`} style={tw('text-xs no-underline text-gray-400')}>9945578308</Link>
                                </View>
                            </View>
                            <View style={tw("flex flex-col gap-4 w-4/5")}>
                                <Text style={title()}>PROFILE</Text>
                                <Text style={description()}>
                                    Passionate and self-motivated full-stack developer with 5+ years of experience in building web and mobile applications. Enjoy solving real-world business problems and have a constant hunger to learn new technologies and implementing new stuff. Strong professional graduated from B M S College of Engineer, Bengaluru.
                                </Text>
                            </View>
                            <View style={tw("w-4/5 flex flex-col gap-4")}>
                                <Text style={title()}>EMPLOYMENT HISTORY</Text>

                                <>
                                    <View style={tw("flex flex-col gap-2")}>
                                        <Text style={subtitle()}>Software Development Engineer II, Atlassian</Text>
                                        <Text style={caption()}>Jul 2022 - Present, Bengaluru</Text>
                                    </View>

                                    <View>
                                        <PdfBulletList>
                                            <PdfBulletList.ListItem>Building and enhancing Frontend for Confluence Migration tool to help customers to migrate their confluence from on-premise solutions to Atlassian cloud.</PdfBulletList.ListItem>
                                            <PdfBulletList.ListItem>Collaborating with engineers across different teams, product manager and UX designers along with writing modern, performant and maintainable code.</PdfBulletList.ListItem>
                                            <PdfBulletList.ListItem>Techs: Java, React.JS, Typescript, Monorepos, React-Redux, Styled Components, React Testing Library, Cypress.</PdfBulletList.ListItem>
                                        </PdfBulletList>
                                    </View>
                                </>

                                <>
                                    <View style={tw("flex flex-col gap-2")}>
                                        <Text style={subtitle()}>Software Engineer III, Walmart Global Tech India</Text>
                                        <Text style={caption()}>Sep 2020 — Jun 2022, Bengaluru</Text>
                                    </View>
                                    <PdfBulletList>
                                        <PdfBulletList.ListItem>Worked as a full-stack developer for Product Reach which is a role‐based, multi‐language B2C workflow creator/editor tool.</PdfBulletList.ListItem>
                                        <PdfBulletList.ListItem>Worked extensively in developing GraphQL APIs in Node.JS.</PdfBulletList.ListItem>
                                        <PdfBulletList.ListItem>Designed and implemented microservice for Data Import Feature using Node.JS, Streams,
                                            Kafka, MSSQL etc. which enhances the import transaction scalability and reliability.</PdfBulletList.ListItem>
                                        <PdfBulletList.ListItem>
                                            Built and enhanced Frontend Web Application in Angular and enhanced the codebase by
                                            developing multiple reusable components.
                                        </PdfBulletList.ListItem>
                                        <PdfBulletList.ListItem>
                                            Worked on building mobile application for the product using React Native.
                                        </PdfBulletList.ListItem>
                                        <PdfBulletList.ListItem>
                                            Techs:
                                        </PdfBulletList.ListItem>
                                        <PdfBulletList>
                                            <PdfBulletList.ListItem>Backend: Node.JS, GraphQL, MSSQL, Kafka, Azure Functions.</PdfBulletList.ListItem>
                                            <PdfBulletList.ListItem>Frontend: Angular, React Native, Typescript.</PdfBulletList.ListItem>
                                            <PdfBulletList.ListItem>Testing Frameworks: Jest, Mocha, Chai, Jasmine, React Testing Library and Cypress.</PdfBulletList.ListItem>
                                        </PdfBulletList>
                                    </PdfBulletList>
                                </>
                                <>
                                    <View style={tw("flex flex-col gap-2")}>
                                        <Text style={subtitle()}>Software Engineer II, Walmart Global Tech India</Text>
                                        <Text style={caption()}>Aug 2018 — Jul 2020, Bengaluru</Text>
                                    </View>
                                    <PdfBulletList>
                                        <PdfBulletList.ListItem>
                                            Worked as a full-stack developer for Indirect Procure to Pay Application(IP2P), a common platform for all Walmart's GNFR suppliers.
                                        </PdfBulletList.ListItem>
                                        <PdfBulletList.ListItem>
                                            Worked extensively in developing backend using SAP ABAP, SAP Gateway and Frontend using SAPUI5.
                                        </PdfBulletList.ListItem>
                                    </PdfBulletList>
                                </>
                            </View>
                        </View>

                        <View style={tw('w-1/4')}>
                            <View style={tw("flex flex-col gap-4")}>
                                <Text style={tw("text-sm")}>LINKS</Text>
                                <Link src='https://www.altamashali.net' style={tw('text-xs no-underline text-gray-700')}>Portfolio</Link>
                                <Link src='https://www.linkedin.com/in/msa-ali/' style={tw('text-xs no-underline text-gray-700')}>LinkedIn</Link>
                                <Link src='https://github.com/msa-ali' style={tw('text-xs no-underline text-gray-700')}>Github</Link>
                            </View>
                            <View style={tw("flex flex-col gap-4 mt-12")}>
                                <Text style={tw("text-sm")}>SKILLS</Text>
                                <Text style={tw('text-xs  text-gray-700')}>React.js</Text>
                                <Text style={tw('text-xs  text-gray-700')}>Node.js</Text>
                                <Text style={tw('text-xs  text-gray-700')}>Javascript</Text>
                                <Text style={tw('text-xs  text-gray-700')}>Typescript</Text>
                                <Text style={tw('text-xs  text-gray-700')}>Go</Text>
                                <Text style={tw('text-xs  text-gray-700')}>React Native</Text>
                                <Text style={tw('text-xs  text-gray-700')}>GraphQL</Text>
                                <Text style={tw('text-xs  text-gray-700')}>Rest API</Text>
                                <Text style={tw('text-xs  text-gray-700')}>MSSQL</Text>
                                <Text style={tw('text-xs  text-gray-700')}>Flutter</Text>
                            </View>
                            <View style={tw("flex flex-col gap-4 mt-12 w-1/2")}>
                                <Text style={tw("text-sm")}>HOBBIES</Text>
                                <Text style={tw('text-xs no-underline text-gray-700 leading-normal')}>Gaming, Reading, Traveling</Text>
                            </View>
                            <View style={tw("flex flex-col gap-4 mt-12 w-1/2")}>
                                <Text style={tw("text-sm")}>LANGUAGES</Text>
                                <Text style={tw('text-xs text-gray-700')}>English</Text>
                                <Text style={tw('text-xs text-gray-700')}>Hindi</Text>
                                <Text style={tw('text-xs text-gray-700')}>Urdu</Text>
                            </View>
                        </View>
                    </Page>
                    <Page size='A4' style={tw("mx-12 my-16 flex flex-row")}>
                        <View style={tw('w-full flex flex-col gap-10 mr-2')}>
                            <View style={tw("w-4/5 flex flex-col gap-4")}>
                                <>
                                    <View style={tw("flex flex-col gap-2")}>
                                        <Text style={subtitle()}>Software Engineer II, Walmart Global Tech India</Text>
                                        <Text style={caption()}>Aug 2018 — Jul 2020, Bengaluru</Text>
                                    </View>
                                    <PdfBulletList>
                                        <PdfBulletList.ListItem>
                                            Worked as a full-stack developer for Indirect Procure to Pay Application(IP2P), a common platform for all Walmart's GNFR suppliers.
                                        </PdfBulletList.ListItem>
                                        <PdfBulletList.ListItem>
                                            Worked extensively in developing backend using SAP ABAP, SAP Gateway and Frontend using SAPUI5.
                                        </PdfBulletList.ListItem>
                                    </PdfBulletList>
                                </>
                                <>
                                    <View style={tw("flex flex-col gap-2")}>
                                        <Text style={subtitle()}>Software Development Intern, Walmart Global Tech India</Text>
                                        <Text style={caption()}>Jan 2018 — Jul 2018, Bengaluru</Text>
                                    </View>
                                    <Text style={tw("text-sm")}>Worked on chatbot functionality for Walmart Internal Application using Microsoft LUIS and React.JS.</Text>
                                </>
                                <View style={tw("flex flex-col gap-4 w-4/5 text-sm")}>
                                    <Text style={title()}>EDUCATION</Text>
                                    <View style={tw("flex flex-col gap-2")}>
                                        <Text style={tw("font-bold")}>B M S College of Engineering, Bachelor of Engineering in Information Science and Engineering</Text>
                                        <Text style={caption()}>Mar 2014 — Mar 2018, Bengaluru</Text>
                                        <Text style={caption()}>CGPA: 8.7</Text>
                                    </View>
                                    <View style={tw("flex flex-col gap-2")}>
                                        <Text>Campus Public School, Intermediate / +2 (CBSE )</Text>
                                        <Text style={caption()}>Mar 2012 — Mar 2013, Samastipur</Text>
                                        <Text style={caption()}>Percentage: 81.83%</Text>
                                    </View>
                                    <View style={tw("flex flex-col gap-2")}>
                                        <Text>Campus Public School, SSC (CBSE)</Text>
                                        <Text style={caption()}>Mar 2010 — Mar 2011, Samastipur</Text>
                                        <Text style={caption()}>CGPA: 10</Text>
                                    </View>
                                </View>
                            </View>
                        </View>

                        {/* <View style={tw('w-1/4')}>

                        </View> */}
                    </Page>
                </Document>
            </PDFViewer>
        </div>
    );
}

export default Template1;