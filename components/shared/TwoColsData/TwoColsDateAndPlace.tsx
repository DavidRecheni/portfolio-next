interface IDateAndPlace {
  start: string;
  end: string;
  place: string;
}
const TwoColsDateAndPlace: React.FC<IDateAndPlace> = ({
  start,
  end,
  place,
}) => {
  return (
    <div className="flex flex-col mt-2 font-medium text-xs">
      <p>{start}</p>
      <p>{end}</p>
      <p>{place}</p>
    </div>
  );
};

export default TwoColsDateAndPlace;
