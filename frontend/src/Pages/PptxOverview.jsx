import React, { useState, useEffect } from "react";
import { saveAs } from 'file-saver';
import pptxgen from 'pptxgenjs';
import "./PptxOverview.css";

function PptxOverview() {
  const [war, setWar] = useState([]);

  useEffect(() => {
    fetchWar();
  }, []);

  const fetchWar = async () => {
    const response = await fetch("http://127.0.0.1:5000/get_war/P69/Wed, 03 Jul 2024 00:00:00 GMT");
    const data = await response.json();
    setWar(data.war);
    console.log(data.war);
  };


  const generatePowerpoint = () => {
    let ppt = new pptxgen();



    // Adding a slide with bullet points
    ppt.addSlide()
      
      .addText([
        { text: war.projectid, options: { fontSize: 32, bullet: true, color: "FF0000", indentLevel: 0 } },
        { text: "Bullet", options: { fontSize: 32, bullet: true, color: "FF0000", indentLevel: 0 } },
        { text: "Point", options: { fontSize: 32, bullet: true, color: "0000FF", indentLevel: 1 } },
        { text: "List", options: { fontSize: 32, bullet: true, color: "FF0000", indentLevel: 0 } },
      ], { x: 0.5, y: 1.0 });

    // Adding a slide with background and text
    let slide = ppt.addSlide();
    slide.background = { path: "https://cdn.pixabay.com/photo/2022/06/21/21/56/konigssee-7276585_960_720.jpg" };
    slide.addText("Welcome", { fontSize: 128, x: 0, y: 0 });

    // Adding a slide with a YouTube video
    ppt.addSlide()
      .addMedia({ type: "online", link: "https://www.youtube.com/embed/PG_wMYCaago", w: "100%", h: "100%" });

    // Saving the PowerPoint file
    ppt.write("blob").then(blob => {
      saveAs(blob, "MyPowerpoint.pptx");
    });
  };

  return (
    <div className = "container">
      <button onClick={generatePowerpoint}>Generate Powerpoint</button>
    </div>
  );
}

export default PptxOverview;


