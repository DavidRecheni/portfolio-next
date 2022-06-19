import TwoColsDataDescription from "./TwoColsDataDescription";
import TwoColsDateAndPlace from "./TwoColsDateAndPlace";
import TwoColsSubtitle from "./TwoColsSubtitle";
import TwoColsTitleAndInstitution from "./TwoColsTitleAndInstitution";
import TwoColsDataType from "./types/TwoColsDataType";

interface ITwoColsDataRow {
  data: TwoColsDataType;
}

const TwoColsDataRow: React.FC<ITwoColsDataRow> = ({ data }) => {
  return (
    <div className="grid grid-cols-6">
      <TwoColsDateAndPlace
        start={data.date.start}
        end={data.date.end}
        place={data.place}
      />
      <div className="flex flex-col col-span-5 gap-1">
        <TwoColsTitleAndInstitution
          title={data.title}
          institution={data.institution}
        />
        <TwoColsSubtitle text={data.stack} />
        <TwoColsDataDescription description={data.description} />
      </div>
    </div>
  );
};

export default TwoColsDataRow;
