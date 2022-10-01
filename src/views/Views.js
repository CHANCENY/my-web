import React from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import DataContext from "../context/DataContext";

//this handle the viewing of source code part
function Views() {
  //bringing in projects all data and setter for window title
  const { projects, setPageTitle } = useContext(DataContext);

  //getting id from url of projects click view source code button
  const { id } = useParams();

  //initiaizing the localStorage for temporary use
  localStorage.setItem(
    "pro",
    JSON.stringify([{ id: "-1", name: "default", body: "defult" }])
  );

  //filtering the correct project from collecting of projects based on id given
  const item = projects.filter((i) => i.id === id);

  //project title extration
  let title = "";
  let description = "";

  //project found by given id. it files collecting get pull out
  const Files = item.map((it) => it.files);

  //title of window get set here
  item.forEach((t) => {
    setPageTitle(t.title);
    title = t.title;
    description = t.description;
  });

  //files collecting is finalised here for below code to be able to handle
  //this is function
  const finalLoop = (element) => {
    element.forEach((l) => {
      //array obj is create from files collecting at every entries
      const li = {
        id: l.idfile,
        name: l.name,
        body: l.body,
      };

      //the obj created get saved in localStorage but first we are getting what we have in our storage and change it to obj and push in our new obj in it the save all together in localStorage
      const old = JSON.parse(localStorage.getItem("pro"));
      old.push(li);
      localStorage.setItem("pro", JSON.stringify(old));
    });
  };

  //this loop is running against the number of collection in files object
  for (let i = 0; i < Files.length; i++) {
    //getting single collection of files
    const element = Files[i];

    //sending single collection into finalLoop to make understandable obj for below code
    finalLoop(element);
  }

  //then here we are collecting all finalised data from storage for use
  const data = JSON.parse(localStorage.getItem("pro"));

  //removing the default part obj check above Line 16
  const needData = data.filter((d) => d.id !== "-1");

  //displaying the files with file name at top
  return (
    <section className="container w-100 mt-5">
      <h3 className="text-center w-100">{title}</h3>
      <p className="text-start lead mt-4 mb-4 p-3 bg-light border ms-5 lh-lg">
        {description}
      </p>
      <h4 className="ms-5 mb-2">Source Code Below</h4>
      {needData.map((file) => (
        <>
          <div className="ms-5 mb-2" key={file.idfile}>
            <h3 className="text-sm-start w-75 p-3 bg-info w-100">
              {file.name}
            </h3>
            <textarea
              name={file.name}
              id={file.idfile}
              col={20}
              rows={20}
              className="w-75 border bg-light mt-2 lh-lg lead w-100"
              readOnly
              value={file.body}
            ></textarea>
          </div>
        </>
      ))}
    </section>
  );
}

export default Views;
