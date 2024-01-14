import Text from "../atoms/Text";

const ErrorComponent = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <Text as="h2">Something goes wrong... 😢</Text>
    </div>
  );
};
export default ErrorComponent;
