const type2 = [
  {
    name: "카페 A",
    latitude: 37.123456,
    longitude: 127.987654,
    category: "1(cafe)",
  },
  {
    name: "카페 B",
    latitude: 37.123457,
    longitude: 127.987655,
    category: "1(cafe)",
  },
];

const type3 = [
  {
    name: "회의실 A",
    latitude: 37.234567,
    longitude: 128.876543,
    category: "2(회의실)",
  },
  {
    name: "회의실 B",
    latitude: 37.234568,
    longitude: 128.876544,
    category: "2(회의실)",
  },
];
const type1 = type2.concat(type3);

const dummyData = [type1, type2, type3];
export default dummyData;
