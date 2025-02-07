import React, { Component } from "react";
import { Icon } from "@iconify/react";
import angularIcon from "@iconify/icons-logos/angular-icon";
import reactIcon from "@iconify/icons-logos/react";
import vueIcon from "@iconify/icons-logos/vue";

class About extends Component {
  render() {
    const { sharedBasicInfo, resumeBasicInfo } = this.props;
    const profilepic = sharedBasicInfo ? "images/" + sharedBasicInfo.image : "";
    const sectionName = resumeBasicInfo ? resumeBasicInfo.section_name.about : "";
    const hello = resumeBasicInfo ? resumeBasicInfo.description_header : "";
    const about = resumeBasicInfo ? resumeBasicInfo.description : "";

    return (
      <section id="about">
        <div className="col-md-12">
          <h1 style={{ color: "black" }}>
            <span>{sectionName}</span>
          </h1>
          <div className="row center mx-auto mb-5">
            <div className="col-md-4 mb-5 center">
              <div className="polaroid">
                <span style={{ cursor: "auto" }}>
                  <img
                    height="250px"
                    src={profilepic}
                    alt="Avatar placeholder"
                  />
                  <Icon
                    icon={angularIcon}
                    style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                  />
                  <Icon
                    icon={reactIcon}
                    style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                  />
                  <Icon
                    icon={vueIcon}
                    style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                  />
                </span>
              </div>
            </div>

            <div className="col-md-8 center">
              <div className="col-md-10">
                <div className="card">
                  <div
                    className="card-header text-right"
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                      gap: "4px",
                      padding: "5px",
                      borderBottom: "none",
                      backgroundColor: "transparent",
                    }}
                  >
                    {/* Minimizar */}
                    <div
                      style={{
                        width: "40px",
                        height: "30px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "#2D2D2D",
                        borderRadius: "0px",
                        cursor: "default",
                      }}
                    >
                      <span
                        className="iconify"
                        data-icon="mdi:window-minimize"
                        style={{ color: "white", fontSize: "18px" }}
                      ></span>
                    </div>

                    {/* Maximizar / Restaurar */}
                    <div
                      style={{
                        width: "40px",
                        height: "30px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "#2D2D2D",
                        borderRadius: "0px",
                        cursor: "default",
                      }}
                    >
                      <span
                        className="iconify"
                        data-icon="mdi:window-maximize"
                        style={{ color: "white", fontSize: "18px" }}
                      ></span>
                    </div>

                    {/* Cerrar */}
                    <div
                      style={{
                        width: "40px",
                        height: "30px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "#E81123",
                        borderRadius: "0px",
                        cursor: "default",
                      }}
                    >
                      <span
                        className="iconify"
                        data-icon="mdi:window-close"
                        style={{ color: "white", fontSize: "18px" }}
                      ></span>
                    </div>
                  </div>
                  <div
                    className="card-body font-trebuchet text-justify ml-3 mr-3"
                    style={{
                      height: "auto",
                      fontSize: "132%",
                      lineHeight: "200%",
                      fontFamily: "'Source Code Pro', monospace", // Fuente aplicada aquí
                    }}
                  >
                    <br />
                    <span className="wave">{hello} :) </span>
                    <br />
                    <br />
                    {about}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
