const ErrorHandler = ({ error }: { error: Error }) => (
  <div className="text-red-500 text-center">
    <p>Something went wrong:</p>
    <pre>{error.message}</pre>
  </div>
);

export default ErrorHandler;
