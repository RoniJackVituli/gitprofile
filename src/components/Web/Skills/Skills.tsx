import React from "react";
import Button from "../../UI/Button/Button";
import classes from "./Skills.module.scss";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import BoxIcon from "../BoxIcon/BoxIcon";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { MdComputer } from "react-icons/md";
type Props = {
  moveForward?: () => void;
  backForward?: () => void;
};

const Skills: React.FC<Props> = ({ moveForward, backForward }) => {
  const core = useSelector((state: RootState) => state.skills.core);
  const frontend = useSelector((state: RootState) => state.skills.frontend);
  const backend = useSelector((state: RootState) => state.skills.backend);
  const software = useSelector((state: RootState) => state.skills.software);

  return (
    <div className={classes.skillContainer}>
      <div className={classes.titleSection}>
        <h1>Skills</h1>
        <p>
          It's time to show off, you can choose all the languages, frameworks,
          software you specialize in, and you can also add the social networks
          you're active.
        </p>
        <div className={classes.divBtn}>
          <Button
            className={classes.btn}
            iconLeft={<MdArrowBackIosNew />}
            onClick={backForward}
          >
            Back section
          </Button>
          <Button
            className={classes.btn}
            iconRight={<MdArrowForwardIos />}
            onClick={moveForward}
          >
            Next section
          </Button>
        </div>
      </div>
      <div className={classes.fillFields}>
        <BoxIcon title="core" iconTitle={<MdComputer />} list={core} />
        <BoxIcon title="frontend" iconTitle={<MdComputer />} list={frontend} />
        <BoxIcon title="backend" iconTitle={<MdComputer />} list={backend} />
        <BoxIcon title="software" iconTitle={<MdComputer />} list={software} />
        {/* <BoxIcon title="other" iconTitle={<MdComputer />} list={core} /> */}
        <div className={classes.divBtn}>
          <Button
            className={classes.btn}
            iconLeft={<MdArrowBackIosNew />}
            onClick={backForward}
          >
            Back section
          </Button>
          <Button
            className={classes.btn}
            iconRight={<MdArrowForwardIos />}
            onClick={moveForward}
          >
            Next section
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Skills;
