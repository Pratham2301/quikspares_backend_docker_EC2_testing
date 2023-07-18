import mongoose from 'mongoose'

const productSchema = mongoose.Schema({
    product_id:
    {
        type: String,
        required: true,
        unique: true
    },
    product_name:
    {
        type: String,
        required: true
    },
    product_company:
    {
        type: String,
        required: true
    },
    product_price:
    {
        type: String,
        required: true
    },
    product_description:
    {
        type: String,
    },
    product_volt:
    {
        type: String,
    },
    product_watt:
    {
        type: String,
    },
    product_audio:
    {
        type: String,
    },
},
    {
        timestamps: true,
    }
);

export default mongoose.model('Products', productSchema)