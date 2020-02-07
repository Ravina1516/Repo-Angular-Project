import { AbstractControl, ValidationErrors } from '@angular/forms';

export class ArtistnameValidators{
    static notNameJack(control:AbstractControl):ValidationErrors | null{
        if((control.value as string) != 'jack')
        return { notNameJack:true }
        return null;
    }
}

export class noofTracksValidators{
    static notTrack(control:AbstractControl):ValidationErrors | null{
        if((control.value as number) !== 4)
        return { notTrack:true }
        return null;
    }
}