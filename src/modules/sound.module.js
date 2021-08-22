import { Module } from "../core/module";
import { random } from "@/utils";

export class SoundModule extends Module {
    constructor(type, text) {
        super(type, text);
    }

    trigger() {
        const randomAudio = random(1, 20);

        let audio = new Audio();
        audio.src = `../../assets/media/s${randomAudio}.wav`;
        audio.autoplay = true;
    }
}