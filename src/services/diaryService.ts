import diaryData from "../../data/entries";
import { DiaryEntry, NonSensitiveDiaryEntry } from "../types";

const diaries: Array<DiaryEntry> = diaryData;

const getEntries = (): DiaryEntry[] => {
  return diaries;
};

const getNonSensitiveEntries = (): NonSensitiveDiaryEntry[] => {
  return diaries.map(({ id, date, weather, visibility }) => ({
    id,
    date,
    weather,
    visibility,
  }));
};

const addDiary = () => {
  return null;
};

export default { getEntries, addDiary, getNonSensitiveEntries };
