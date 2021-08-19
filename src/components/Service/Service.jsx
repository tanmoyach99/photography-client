import React, { useState } from "react";
import "./Service.css";
import ReactPaginate from "react-paginate";
import { service } from "../../data";
import { Link } from "react-router-dom";

const Service = () => {
  const [services, setServices] = useState(service);

  const [pageNumber, setPageNumber] = useState(0);

  const CoursePerPage = 3;
  const pagesVisited = pageNumber * CoursePerPage;

  const servicePerPage = services.slice(
    pagesVisited,
    pagesVisited + CoursePerPage
  );

  const pageCount = Math.ceil(services.length / CoursePerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <div classNameName="service container-fluid ">
      <div className="d-flex row p-5 m-5 service-card align-items-center justify-content-center">
        {servicePerPage.map((singleService) => (
          <div className="card col-md-3 col-sm-6 col-xm-12 mx-2">
            <img
              className="card-img-top"
              src={singleService.img}
              alt="cap"
              style={{ width: "336px", height: "250px", objectFit: "cover" }}
            />
            <div className="card-body">
              <h5 className="card-title text-center">{singleService.name}</h5>
              <p className="card-text text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus, mollitia!
              </p>
              <p className="card-text text-center">$ {singleService.price}</p>
              <h6 className="serviceDuration text-center">
                {singleService.duration}
              </h6>
              <div className="d-flex row align-items-center justify-content-center">
                <button className="btn-book btn col-md-5 m-1"> Book now</button>
                <Link
                  className="col-md-5 view-link"
                  to={"serviceDetails/" + singleService.id}
                >
                  View more -->
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="m-2 d-flex justify-content-center align-items-center">
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"paginationBtn"}
          previousLinkClassName={"previousBtn"}
          nextLinkClassName={"nextBtn"}
          activeClassName={"paginationActive"}
        />
      </div>
    </div>
  );
};

export default Service;
