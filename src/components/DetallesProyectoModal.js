import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import AwesomeSlider from "react-awesome-slider";
import AwesomeSliderEstilosClaro from "../scss/light-slider.scss";
import AwesomeSliderEstilosOscuro from "../scss/dark-slider.scss";
import "react-awesome-slider/dist/custom-animations/scale-out-animation.css";

class DetallesProyectoModal extends Component {
  render() {
    if (this.props.datos) {
      const tecnologias = this.props.datos.tecnologias;
      const imagenes = this.props.datos.imagenes;
      var titulo = this.props.datos.titulo;
      var descripcion = this.props.datos.descripcion;
      var url = this.props.datos.url;

      if (this.props.datos.tecnologias) {
        var listaTecnologias = tecnologias.map((icono, i) => {
          return (
            <li className="list-inline-item mx-3" key={i}>
              <span>
                <div className="text-center">
                  <i className={icono.class} style={{ fontSize: "300%" }}>
                    <p className="text-center" style={{ fontSize: "30%" }}>
                      {icono.nombre}
                    </p>
                  </i>
                </div>
              </span>
            </li>
          );
        });
      }

      if (this.props.datos.imagenes) {
        var listaImagenes = imagenes.map((imagen, i) => {
          return <div key={i} data-src={imagen} />;
        });
      }
    }

    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="modal-titulo"
        centered
        className="modal-inside"
      >
        <span onClick={this.props.onHide} className="modal-cerrar">
          <i className="fas fa-times fa-3x icono-cerrar"></i>
        </span>
        <div className="col-md-12">
          <div className="col-md-10 mx-auto" style={{ paddingBottom: "50px" }}>
            <div className="barra-modal">
              <span
                className="iconify icono-modal"
                data-icon="emojione:red-circle"
                data-inline="false"
                style={{ marginLeft: "5px" }}
              ></span>{" "}
              &nbsp;{" "}
              <span
                className="iconify icono-modal"
                data-icon="twemoji:yellow-circle"
                data-inline="false"
              ></span>{" "}
              &nbsp;{" "}
              <span
                className="iconify icono-modal"
                data-icon="twemoji:green-circle"
                data-inline="false"
              ></span>
            </div>
            <AwesomeSlider
              cssModule={[AwesomeSliderEstilosClaro, AwesomeSliderEstilosOscuro]}
              animation="scaleOutAnimation"
              className="slider-imagen"
            >
              {listaImagenes}
            </AwesomeSlider>
          </div>
          <div className="col-md-10 mx-auto">
            <h3 style={{ padding: "5px 5px 0 5px" }}>
              {titulo}
              {url ? (
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="enlace-externo"
                >
                  <i
                    className="fas fa-external-link-alt"
                    style={{ marginLeft: "10px" }}
                  ></i>
                </a>
              ) : null}
            </h3>
            <p className="modal-descripcion">{descripcion}</p>
            <div className="col-md-12 text-center">
              <ul className="list-inline mx-auto">{listaTecnologias}</ul>
            </div>
          </div>
        </div>
      </Modal>
    );
  }
}

export default DetallesProyectoModal;
