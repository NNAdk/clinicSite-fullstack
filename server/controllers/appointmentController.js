import * as appointmentRepo from '../repo/appointmentRepo.js';

export const createRecordController = async (req, res) => {
    try {
        const record = await appointmentRepo.createRecord(req.body);
        res.status(201).json(record);
    } catch (err) {
        res.status(500).json({error: err.message});
    }
};

export const getRecordsController = async (req, res) => {
    try {
        const records = await appointmentRepo.getRecords();
        res.json(records);
    } catch (err) {
        res.status(500).json({error: err.message});
    }
};