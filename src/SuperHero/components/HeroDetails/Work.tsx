import { TypeWork } from "../../../types/TypeHero";

type TypeWorkProps = {
  props: TypeWork;
}

export const Work = ( { props }: TypeWorkProps ) => {
  console.log(props);
  return (
    <div>Work</div>
  )
}
