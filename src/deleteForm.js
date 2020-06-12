function DeleteForm() {
    return (
      <>
        <h1>Delete Form</h1>
        <form action="localhost:8080/api/countries<country_name>" method="Delete">
          Name <input type="text" id="name" name="name" />
        </form>
      </>
    );
}


export default DeleteForm
