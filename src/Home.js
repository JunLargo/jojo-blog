
const Home = () => {
    const handleClick = (e) => {
        console.log('Hello Ninjas ', e)
    }
    const clickMeAgain = (name, e) => {
        console.log('Hello ' + name, e);
    }


    return (
        <div className="home">
            <h2>Homepage</h2>
            <button onClick = {handleClick}>Click me</button>

            <button onClick={(e) => clickMeAgain('Andrea', e.target)}>Click me Again</button>
        </div>
    );
}
 
export default Home;