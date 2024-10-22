interface TwoColsDataType {
  place: string;
  institution: {
    name: string;
    link: string;
  };
  date: {
    start: string;
    end: string;
  };
  title: string;
  stack: string;
  description: string;
}

export default TwoColsDataType;
