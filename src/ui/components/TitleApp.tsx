interface TitleProps {
  title1: string;
  title2: string;
}

export const TitleApp = ({title1, title2}: TitleProps) => {
  return (
    <h2 className = "text-5xl">{title1}<span className="text-[#f64445]">{title2}.</span></h2>
  )
}
