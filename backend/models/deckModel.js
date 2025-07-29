import mongoose from 'mongoose';

const deckSchema = new mongoose.Schema({
    deckName: {type: String, required: true, trim: true},
    deckDescription: {type: String, trim: true},
    userId: {type: mongoose.Schema.Types.ObjectId, ref: "User", required: true},
    isPublic: {type: Boolean, default: false},
    cardCount: {type: Number, default: 0}
}, {
    timestamps: true,
})

const deckModel = mongoose.models.deck || mongoose.model("deck", deckSchema);

export default deckModel;