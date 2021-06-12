import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("Profile Status", () => {
    test("status from props", () => {
        const component = create(<ProfileStatus status="SUBSCRIBE TO CAR" />);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("SUBSCRIBE TO CAR");
    });
});