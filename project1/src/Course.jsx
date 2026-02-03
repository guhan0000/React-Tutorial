const Course = () => {
  const styles = { color: "white", backgroundColor: "blue", width: "50px" };
  return (
    <>
      <h4>Courses Available</h4>
      <ul>
        <li
          style={{
            color: "blue",
            border: "2px solid red",
            width: "50px",
          }}
        >
          HTML
        </li>
        <li style={styles}>CSS</li>
        <li>JavaScript</li>
      </ul>
    </>
  );
};
export default Course;
