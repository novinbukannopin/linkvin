"use client";

import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import Link from "next/link";

import Linked from "../components/Linked";
import { AiFillLinkedin, AiFillWarning } from "react-icons/ai";

export default function ModalConfirm({ icon, title, link }) {
  const [openModal, setOpenModal] = useState("");
  const props = { openModal, setOpenModal };

  return (
    <>
      <button onClick={() => props.setOpenModal("pop-up")} className="">
        <Linked icon={icon} title={title} link={"#"} />
      </button>
      <Modal
        show={props.openModal === "pop-up"}
        size="md"
        popup
        onClose={() => props.setOpenModal(undefined)}
      >
        <Modal.Header />
        <Modal.Body className="">
          <div className="text-center">
            <AiFillWarning
              color="#1d3557"
              className="mx-auto mb-4 h-100 w-100 text-gray-400 dark:text-gray-200"
              size={52}
            />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Are you sure you want to visit {title}
            </h3>
            <div className="flex justify-center gap-4">
              <Link href={link}>
                <Button
                  color="success"
                  onClick={() => props.setOpenModal(undefined)}
                >
                  Yes, I'm sure
                </Button>
              </Link>
              <Button
                color="gray"
                onClick={() => props.setOpenModal(undefined)}
              >
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
