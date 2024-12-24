// import { useEffect, useState } from "react";
// import axios from "axios";
// import "../../assets/css/style.css";
// import AOS from "aos";
// import { tns } from "tiny-slider/src/tiny-slider";

// function ListProject() {
//   const [projects, setProjects] = useState([]);
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     AOS.init({ duration: 1200, once: true });
//     fetchProjects();
//   }, []);

//   const fetchProjects = async () => {
//     setLoading(true);
//     try {
//       const response = await axios.get(`http://localhost:5000/api/project`);
//       if (response.data.success && Array.isArray(response.data.data)) {
//         setProjects(response.data.data);
//       } else {
//         setError("Không thể tải dự án.");
//       }
//     } catch (err) {
//       console.error("Error fetching projects:", err);
//       setError("Không thể tải dự án.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     let projectSlider;

//     // Slider cho projects
//     if (projects.length > 0) {
//       projectSlider = tns({
//         container: ".project-slider",
//         items: 1,
//         slideBy: 1,
//         autoplay: true,
//         autoplayButtonOutput: false,
//         controls: true,
//         nav: true,
//         speed: 200,
//         prevButton: ".prev-project",
//         nextButton: ".next-project",
//         responsive: {
//           640: { items: 1 },
//           768: { items: 2 },
//           1024: { items: 3 },
//         },
//       });
//     }

//     return () => {
//       // Dọn dẹp slider
//       if (projectSlider) projectSlider.destroy();
//     };
//   }, [projects]);

//   if (loading) {
//     return (
//       <div
//         className="d-flex justify-content-center align-items-center"
//         style={{ height: "200px" }}
//       >
//         <div className="spinner-border text-primary" role="status">
//           <span className="visually-hidden">Loading...</span>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="section" style={{ paddingBottom: 0 }}>
//       <div className="container">
//         <div className="row mb-5 align-items-center">
//           <div className="col-lg-6">
//             <h2 className="font-weight-bold text-primary heading">Dự án</h2>
//           </div>
//           <div className="col-lg-6 text-lg-end">
//             <p>
//               <a
//                 href="/project"
//                 className="btn btn-primary text-white py-3 px-4"
//               >
//                 Xem tất cả
//               </a>
//             </p>
//           </div>
//         </div>
//         <div className="row">
//           <div className="col-12">
//             <div className="property-slider-wrap">
//               {error && <div className="text-danger mb-3">{error}</div>}
//               <div
//                 className="project-slider"
//                 style={{ display: "flex", gap: "15px" }}
//               >
//                 {projects.length > 0 ? (
//                   projects.map((project) => (
//                     <div className="property-item" key={project._id}>
//                       <a href={`/projects/${project._id}`} className="img">
//                         <img
//                           src={project.image || "default-image.jpg"}
//                           alt={project.title || "Hình ảnh dự án"}
//                           className="img-fluid"
//                         />
//                       </a>
//                       <div className="property-content">
//                         <div className="price mb-2">
//                           <span>{project.title}</span>
//                         </div>
//                         <div>
//                           <span className="d-block mb-2 text-black-50">
//                             {project.address || "Địa chỉ không xác định"}
//                           </span>
//                           <span className="d-block mb-2 text-black-50">
//                             {project.area || "Diện tích không xác định"} ha
//                           </span>
//                           <span
//                             className="city d-block mb-3"
//                             style={{
//                               whiteSpace: "nowrap",
//                               overflow: "hidden",
//                               textOverflow: "ellipsis",
//                             }}
//                           >
//                             {project.description || "Mô tả không xác định"}
//                           </span>
//                           <a
//                             href={`/projects/${project._id}`}
//                             className="btn btn-primary py-2 px-3"
//                           >
//                             Xem chi tiết
//                           </a>
//                         </div>
//                       </div>
//                     </div>
//                   ))
//                 ) : (
//                   <p>Không có dự án nào.</p>
//                 )}
//               </div>
//               <div
//                 id="property-nav"
//                 className="controls"
//                 tabIndex="0"
//                 aria-label="Carousel Navigation"
//               >
//                 <span
//                   className="prev-project"
//                   data-controls="prev"
//                   aria-controls="property"
//                   tabIndex="-1"
//                   role="button"
//                   aria-label="Previous slide"
//                 >
//                   &#9664;
//                 </span>
//                 <span
//                   className="next-project"
//                   data-controls="next"
//                   aria-controls="property"
//                   tabIndex="-1"
//                   role="button"
//                   aria-label="Next slide"
//                 >
//                   &#9654;
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ListProject;
import { useEffect, useState } from "react";
import axios from "axios";
import "../../assets/css/style.css";
import AOS from "aos";
import { tns } from "tiny-slider/src/tiny-slider";

function ListProject() {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`http://localhost:5000/api/project`);
      if (response.data.success && Array.isArray(response.data.data)) {
        setProjects(response.data.data);
      } else {
        setError("Không thể tải dự án.");
      }
    } catch (err) {
      console.error("Error fetching projects:", err);
      setError("Không thể tải dự án.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    let projectSlider;

    // Slider cho projects
    if (projects.length > 0) {
      projectSlider = tns({
        container: ".project-slider",
        items: 1,
        slideBy: 1,
        autoplay: true,
        autoplayButtonOutput: false,
        controls: true,
        nav: true,
        speed: 200,
        prevButton: ".prev-project",
        nextButton: ".next-project",
        responsive: {
          640: { items: 1 },
          768: { items: 2 },
          1024: { items: 3 },
        },
      });
    }

    return () => {
      // Dọn dẹp slider
      if (projectSlider) projectSlider.destroy();
    };
  }, [projects]);

  if (loading) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "200px" }}
      >
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="section" style={{ paddingBottom: 0 }}>
      <div className="container">
        <div className="row mb-5 align-items-center">
          <div className="col-lg-6">
            <h2 className="font-weight-bold text-primary heading">Dự án</h2>
          </div>
          <div className="col-lg-6 text-lg-end">
            <p>
              <a
                href="/project"
                className="btn btn-primary text-white py-3 px-4"
              >
                Xem tất cả
              </a>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="property-slider-wrap">
              {error && <div className="text-danger mb-3">{error}</div>}
              <div
                className="project-slider"
                style={{ display: "flex", gap: "15px" }}
              >
                {projects.length > 0 ? (
                  projects.map((project) => (
                    <div className="property-item" key={project._id}>
                      <a href={`/projects/${project._id}`} className="img">
                        <img
                          src={project.image || "default-image.jpg"}
                          alt={project.title || "Hình ảnh dự án"}
                          className="img-fluid"
                        />
                      </a>
                      <div className="property-content">
                        <div className="price mb-2">
                          <span>{project.title}</span>
                        </div>
                        <div>
                          <span className="d-block mb-2 text-black-50">
                            {project.address || "Địa chỉ không xác định"}
                          </span>
                          <span className="d-block mb-2 text-black-50">
                            {project.area || "Diện tích không xác định"} ha
                          </span>
                          <span
                            className="city d-block mb-3"
                            style={{
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                            }}
                          >
                            {project.description || "Mô tả không xác định"}
                          </span>
                          <a
                            href={`/projects/${project._id}`}
                            className="btn btn-primary py-2 px-3"
                          >
                            Xem chi tiết
                          </a>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>Không có dự án nào.</p>
                )}
              </div>
              <div
                id="property-nav"
                className="controls"
                tabIndex="0"
                aria-label="Carousel Navigation"
              >
                <span
                  className="prev-project"
                  data-controls="prev"
                  aria-controls="property"
                  tabIndex="-1"
                  role="button"
                  aria-label="Previous slide"
                >
                  &#9664;
                </span>
                <span
                  className="next-project"
                  data-controls="next"
                  aria-controls="property"
                  tabIndex="-1"
                  role="button"
                  aria-label="Next slide"
                >
                  &#9654;
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListProject;