import { createContext, useState, useEffect } from "react";
import Api from "../apifiles/Api";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  //all these are useState to hold and process data  need for this website
  const [ownerInfo, setOwnerInfo] = useState([]);
  const [projects, setProjects] = useState([]);
  const [latestProjects, setLatestProject] = useState([]);
  const [pageTitle, setPageTitle] = useState("Chance-Ny");
  const [logoid, setLogoId] = useState("");
  const [logoImage, setLogoImage] = useState("");
  const [resumeDocument, setResumeDocument] = useState("");
  const [resumeDocumentType, setResumeDocumentType] = useState("");
  const [search, setSearch] = useState("");
  const [pageAt, setPageAt] = useState(0);
  const [links, setLinks] = useState([]);
  const [emailSecurity, setEmailSecurity] = useState([]);
  const [users, setUsers] = useState([]);
  const [logged, setLogged] = useState(false);
  const [loggedUser, setLoggedUser] = useState("");
  const [backgroundImage, setBackGroundImage] = useState([]);
  const baseUrl = "https://chanceapi.tk/REST/api/";

  //useEffect being used to run onload time to collect owner info

  //trying one development onyly

  useEffect(() => {
    try {
      const fetchOwner = async () => {
        const response = await Api.get("owner/user.php");
        if (response) {
          setOwnerInfo(response.data);
        }
      };

      fetchOwner();
    } catch (error) {
      console.log("Error fetching onwer info: ", error.message);
    }
  }, []);

  //useEffect being used to run onload time to collect all projects
  useEffect(() => {
    try {
      const fetchProjects = async () => {
        const response = await Api.get(`${baseUrl}project/projects.php`);
        if (response) {
          const proData = response.data;
          setProjects(proData);
          const size = proData.length;
          if (size > 4) {
            const pro1 = proData[size - 1];
            const pro2 = proData[size - 2];
            const pro3 = proData[size - 3];

            const latest = [pro1, pro2, pro3];
            setLatestProject(latest);
          } else {
            setLatestProject(proData);
          }
        }
      };
      fetchProjects();
    } catch (error) {
      console.log("Error fetching all projects: ", error.message);
    }
  }, []);

  //useEffect being used to run every time user has switching pages in website to keep tracking of which page is in use and set right title of it
  useEffect(() => {
    const changingTitle = () => {
      try {
        const idTitle = document.getElementById("myPageTitle");
        idTitle.innerText = pageTitle;
      } catch (error) {
        console.log("Changing: error: ", error.message);
      }
    };
    changingTitle();
  }, [pageTitle]);

  //these useEffect runs onload to collect logo image from server
  useEffect(() => {
    const logoLoader = async () => {
      const response = await Api.get("logo/logo.php");
      if (response) {
        const dataLogo = response.data;
        dataLogo.forEach((lo) => {
          setLogoId(lo.id);
          setLogoImage(lo.logo);
        });
      }
    };
    logoLoader();
  }, []);

  useEffect(() => {
    const fitIcon = () => {
      const d = document.getElementById("icons");
      d.setAttribute("href", logoImage);
    };
    fitIcon();
  }, []);

  //these useEffect runs onload to collect resume from server
  useEffect(() => {
    const resumeLoader = async () => {
      const response = await Api.get("resume/resume.php");
      if (response) {
        const resumeObject = response.data;
        resumeObject.forEach((obj) => {
          setResumeDocument(obj.resume);
          //setResumeDocumentType(obj.type);
        });
      }
    };
    resumeLoader();
  }, [resumeDocument]);

  //these useEffect is used to run on every click or typing on searching bar in project page to do the searching and rendering the matches
  useEffect(() => {
    const handleSearch = () => {
      if (search !== null) {
        const filteredlist = projects.filter(
          (pro) =>
            pro.title.toLowerCase().includes(search.toLowerCase()) ||
            pro.description.toLowerCase().includes(search.toLowerCase())
        );
        if (filteredlist.length > 0) {
          setProjects(filteredlist.reverse());
        } else {
          alertsEmptySearch("Sorry no project found.....");
        }
      }
    };
    handleSearch();
  }, [search]);

  //these useEffect runs onload to collect social links from server
  useEffect(() => {
    const fetchingLinks = async () => {
      try {
        const response = await Api.get("links/links.php");
        if (response) {
          const links = response.data;
          setLinks(links);
        }
      } catch (error) {
        console.log("Error: ", error.message);
      }
    };
    fetchingLinks();
  }, []);

  //this useEffect is used to run onload to collect email keys needed for use to be able to send mail using mailjs
  useEffect(() => {
    const fetchEmailSettings = async () => {
      const response = await Api.get("emailsetting/setting.php");
      if (response) {
        setEmailSecurity(response.data);
      }
    };

    fetchEmailSettings();
  }, []);

  //use to bring in or users from server during loading time
  useEffect(() => {
    const fetchUsers = async () => {
      const response = await Api.get("users/users.php");
      if (response) {
        setUsers(response.data);
      }
    };
    fetchUsers();
  }, []);

  //this useEffect keep counting for auto logout when user has logged in but the count get intrupted every every time when user is switch through pages counting restarts
  useEffect(() => {
    const logoutauto = () => {
      console.log("logging out coounting has started......");
      setTimeout(async () => {
        const userout = { key: localStorage.getItem("code") };

        const response = await fetch(`${baseUrl}logging/validatorOut.php`, {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(userout),
        });

        const resData = await response.json();

        if (resData.status === "200") {
          setLoggedUser("");
          setLogged(false);
          //localStorage.setItem('code', "");
          localStorage.removeItem("code");
          console.log("out log");
        }
      }, 1000 * 60 * 60);
    };

    logoutauto();
  }, [loggedUser, pageTitle]);

  //run onload to collect background image
  useEffect(() => {
    const fetchingBackgroundImages = async () => {
      try {
        const resp = await Api.get("background/background.php");
        if (resp) {
          setBackGroundImage(resp.data);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchingBackgroundImages();
  }, []);

  //this gives alert if search return without projects
  const alertsEmptySearch = (message) => {
    if (document.getElementById("para") === null && search !== "") {
      let cons = document.getElementById("cons");
      let box = document.getElementById("boxdiv");

      const para = document.createElement("p");
      para.className = "p-5 bg-light border text-center lead";
      para.id = "para";
      para.appendChild(document.createTextNode(message));

      cons.insertBefore(para, box);

      setTimeout(() => {
        para.remove();
      }, 3000);
    }
  };

  //this handles the reload of project page if search bar has cleared
  const handleLoader = async (e) => {
    try {
      if (e.target.value == "") {
        const response = await Api.get(`${baseUrl}project/projects.php`);
        if (response) {
          setProjects(response.data);
        }
      }
    } catch (error) {
      console.log("Error: in reloader: ", error.message);
    }
  };

  //changing date format
  const changingDateFormat = (dates) => {
    const date = new Date(dates);
    return date.toLocaleString();
  };
  // console.log(changingDateFormat("09-05-2022"));

  //returning all variable and setter and function to our app to be used
  return (
    <DataContext.Provider
      value={{
        ownerInfo,
        setOwnerInfo,
        projects,
        setProjects,
        latestProjects,
        setPageTitle,
        logoImage,
        logoid,
        resumeDocument,
        resumeDocumentType,
        setResumeDocument,
        setSearch,
        handleLoader,
        alertsEmptySearch,
        pageAt,
        setPageAt,
        links,
        emailSecurity,
        setEmailSecurity,
        logged,
        setLogged,
        users,
        setUsers,
        loggedUser,
        setLoggedUser,
        backgroundImage,
        changingDateFormat,
        baseUrl,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
