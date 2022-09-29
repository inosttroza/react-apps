import React from "react";
import { Input, Modal } from "antd";


function Popup({ open, edit, setEdit, setData, ResetEditing, Add }) {

    return (
        <>
            <Modal title={(edit?.id !== undefined && edit?.id !== null) ? "Edite registro" : "Add registro"}
                open={open}
                okText="Save"
                onCancel={() => ResetEditing()}
                onOk={() => {

                    if (edit?.id !== undefined && edit?.id !== null) {
                        //EDITO
                        setData((x) => {
                            return x.map((student) => {
                                if (student.id === edit.id) {
                                    return edit;
                                } else {
                                    return student;
                                }
                            });
                        });
                        ResetEditing();
                    } else {
                        //ADD
                        const itemAdd = {
                            name: edit?.name
                            , email: edit?.email
                            , address: edit?.address
                            , phone: edit?.phone
                            , website: edit?.website
                        }
                        Add(itemAdd)
                        ResetEditing();
                    }
                }}
            >
                <Input value={edit?.name}
                    placeholder="name"
                    onChange={(e) => {
                        setEdit((pre) => {
                            return { ...pre, name: e.target.value };
                        });
                    }}
                />
                <Input value={edit?.email}
                    placeholder="email"
                    onChange={(e) => {
                        setEdit((pre) => {
                            return { ...pre, email: e.target.value };
                        });
                    }}
                />
                <Input value={edit?.address}
                    placeholder="address"
                    onChange={(e) => {
                        setEdit((pre) => {
                            return { ...pre, address: e.target.value };
                        });
                    }}
                />
                <Input value={edit?.phone}
                    placeholder="phone"
                    onChange={(e) => {
                        setEdit((pre) => {
                            return { ...pre, phone: e.target.value };
                        });
                    }}
                />
                <Input value={edit?.website}
                    placeholder="website"
                    onChange={(e) => {
                        setEdit((pre) => {
                            return { ...pre, website: e.target.value };
                        });
                    }}
                />
            </Modal>
        </>
    )
}

export default Popup