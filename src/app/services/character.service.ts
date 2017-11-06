import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {Character} from "../Logic/Models/character";
import 'rxjs/add/observable/of';

@Injectable()
export class CharacterService {

  public characters: Character[];

  constructor() {
    this.createDummyData();
  }

  private createDummyData() {
    this.characters = [];
    this.characters.push({
      id: 1,
      name: 'Razhanal',
      race: 'Demon',
      gender: 'Female',
      subclass: 'Ancient Warrior',
      portrait: '../assets/images/portraits/portrait_1.png',
      description: 'Razhanal the Ancient Demon is one of the survivors of the Gods Apocalypse. Her powers.... '
    });

    this.characters.push({
      id: 2,
      name: 'Yzanoth',
      race: 'Human',
      gender: 'Male',
      subclass: 'Ancient Death Knight',
      portrait: '../assets/images/portraits/portrait_2.png',
      description: 'Nicknamed the Ice God. Yzanoth is a immortal death knight, roaming the Forsaken Wastes. ...'
    });

    this.characters.push({
      id: 3,
      name: 'Isidrae',
      race: 'Elf',
      gender: 'Female',
      subclass: 'Ranger',
      portrait: '../assets/images/portraits/portrait_3.png',
      description: 'Isidrae is a young elven commander leading the 11th ranger unit from the elven army. '
    });
  }

  public getCharacters(): Observable<Character[]> {
    //return this._characters;
    return Observable.of(this.characters);
  }

  public getCharacter(id: number):Observable<Character> {
    return Observable.create(this.characters[id]);
  }
}
