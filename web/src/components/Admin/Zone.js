import React from "react";

function Zone() {
  return (
    <>
      <div className="app-content content">
        <div className="content-overlay" />
        <div className="content-wrapper">
          <div className="content-header row">
            <div className="content-header-left col-12 mb-2 mt-1">
              <div className="row breadcrumbs-top">
                <div className="col-12">
                  <h5 className="content-header-title float-left pr-1 mb-0">
                    Zone Master
                  </h5>
                  <div className="breadcrumb-wrapper col-12">
                    <ol className="breadcrumb p-0 mb-0">
                      <li className="breadcrumb-item">
                        <a href>
                          <i className="bx bx-home-alt" />
                        </a>
                      </li>
                      <li className="breadcrumb-item">
                        <a href>Master &amp; Seting</a>
                      </li>
                      <li className="breadcrumb-item active">
                        <a href style={{ color: "#027cf5" }}>
                          Zone Master
                        </a>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row" id="table-hover-row">
            <div className="col-12">
              <div className="card">
                <div className="card-content">
                  <div className="table-responsive">
                    <input
                      id="myInput"
                      className="float-left"
                      style={{ margin: 10 }}
                      type="text"
                      placeholder="Search.."
                    />
                    <a
                      href="{{ route('mdept.create')}}"
                      className="btn btn-success float-right"
                      style={{ margin: 10 }}
                    >
                      Create
                    </a>
                    <table id="myTable" className="table table-hover mb-0">
                      <thead>
                        <tr className="header">
                          <th scope="col">#</th>
                          <th scope="col">Name</th>
                          <th scope="col">Zone</th>
                          <th scope="col"></th>
                          <th scope="col" />
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td />
                          <td style={{ width: "70%" }} />
                          <td style={{ width: "1%" }}>
                            <div className="mb-1">
                              <div className="btn-group">
                                <a
                                  href
                                  className="btn btn-primary"
                                  style={{
                                    padding: "6px !important",
                                    height: "30px !important",
                                    margin: 1,
                                  }}
                                >
                                  <i
                                    style={{
                                      color: "#fff",
                                      fontWeight: "bold",
                                      top: "-1px !important",
                                    }}
                                    className="bx bx-search"
                                  />
                                </a>
                                <a
                                  href
                                  className="btn btn-warning"
                                  style={{
                                    padding: "6px !important",
                                    height: "30px !important",
                                    margin: 1,
                                  }}
                                >
                                  <i
                                    style={{
                                      color: "#fff",
                                      fontWeight: "bold",
                                      top: "-1px !important",
                                    }}
                                    className="bx bx-pencil"
                                  />
                                </a>
                                <form action method="post">
                                  <button
                                    type="submit"
                                    className="btn btn-danger"
                                    style={{
                                      padding: "6px !important",
                                      height: "30px !important",
                                      margin: 1,
                                    }}
                                  >
                                    <i
                                      style={{
                                        color: "#fff",
                                        fontWeight: "bold",
                                        top: "-1px !important",
                                      }}
                                      className="bx bx-trash"
                                    />
                                  </button>
                                </form>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
          <div className="d-flex justify-content-center"></div>
        </div>
      </div>
    </>
  );
}

export default Zone;
