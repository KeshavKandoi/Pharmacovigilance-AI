const errorHandler = (err, req, res, next) => {
  console.log("Something went wrong!");

  res.status(500).json({
    success: false,
    message: "Internal Server Error",
  });
};

export default errorHandler