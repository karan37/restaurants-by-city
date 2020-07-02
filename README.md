This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## Technical QuestionS

### Question 1
It took me around a couple hours to implement this solution. I tried to make sure that atleast my submission has a solution that follows the user stor provided. I wish I had more time to be able to better style this project as well write some tests for it.

### Question 2
Spread operators have been quite handy at returning new, un-mutated, objects from reducers eg.
`return [...state, ...nextPageRestaurants]`

Also destructuring within function params is very helpful to track all properties of a pure function eg.
`
const Restaurant = ({ name, address, area }) => (
    < div className="restaurant" >
        <p>{name}</p>
        <p>{address}</p>
        <p>{area}</p>
    </div >
)
`

### Question 3
To optimize performance I would start profiling the application.
Look for bottlenecks eg. heavy scripts, time-consuming requests.
I would also try to see where I could optimize rendering speeds using memoization.

### Question 4
The api could be enhanced to handle query for multiple fields

