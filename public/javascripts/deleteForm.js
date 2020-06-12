function DeleteForm() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "Delete Form"), /*#__PURE__*/React.createElement("form", {
    action: "localhost:8080/api/countries<country_name>",
    method: "Delete"
  }, "Name ", /*#__PURE__*/React.createElement("input", {
    type: "text",
    id: "name",
    name: "name"
  })));
}

export default DeleteForm;