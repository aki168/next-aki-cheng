export const IconBtn = ({
  faClass,
  linkTo,
}: {
  faClass: string;
  linkTo: string;
}) => {
  return (
    <li className="hero__list__item list-none">
      <a href={linkTo} target="_blank">
        <i className={faClass}></i>
      </a>
    </li>
  );
};
