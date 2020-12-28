import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const dictionaryenSchema = mongoose.Schema(
  {
    id: String,
    language: String,
    headword: {
      text: String,
      pos: String,
    },
    senses: [
      {
        idsense: String,
        definition: String,
      },
    ],
  },
  { timestamps: true }
);

dictionaryenSchema.plugin(mongoosePaginate);

const DictionaryEn = mongoose.model("DictionaryEn", dictionaryenSchema);

export default DictionaryEn;
