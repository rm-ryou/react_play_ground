import DefaultLayout from "../templates/DefaultLayout";

import classes from './ErrorPage.module.css'

const ErrorPage = () => {
  return (
    <>
      <DefaultLayout />
      <h1 className={classes.h1}>Not Found</h1>
      <p className={classes.p}>Click on the Home icon to return to the home page</p>
    </>
  )
}

export default ErrorPage;
