import TwoColsDataRow from "./TwoColsData/TwoColsDataRow";
import TwoColsDataType from "./TwoColsData/types/TwoColsDataType";

interface ITwoColsData {
  data: TwoColsDataType[];
}

const TwoColsData: React.FC<ITwoColsData> = ({ data }) => (
  <div className="my-2 px-2">
    {data.map((e) => (
      <TwoColsDataRow data={e} key={e.title} />
    ))}
  </div>
);

export default TwoColsData;
