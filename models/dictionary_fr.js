import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const dictionaryfrSchema = mongoose.Schema(
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

dictionaryfrSchema.plugin(mongoosePaginate);

const DictionaryFr = mongoose.model("DictionaryFr", dictionaryfrSchema);

export default DictionaryFr;
