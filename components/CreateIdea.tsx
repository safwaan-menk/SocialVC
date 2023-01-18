export default function CreateIdea({ onSubmit }: any) {
  return (
    <div className="h-screen relative flex flex-row justify-center items-center">
      <form
        name="text"
        onSubmit={onSubmit}
        action="/send-data-here"
        method="post"
      >
        <label htmlFor="Title">Title:</label>
        <input type="text" id="title" name="Title" />
        <label htmlFor="Description">Description:</label>
        <input type="text" id="description" name="Description" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
