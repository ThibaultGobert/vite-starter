import { Button } from "@/components/ui/button";
import "./about.scss";

const AboutComponent = () => {
  return (
    <div className="custom-class">
      This is the About component with a{" "}
      <Button onClick={() => console.log("smth")}>Button</Button>
    </div>
  );
};

export default AboutComponent;
