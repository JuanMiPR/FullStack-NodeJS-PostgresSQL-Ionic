import { Pipe, PipeTransform } from '@angular/core';
import { Users } from '../models/user.model';

@Pipe({
  name: 'filterUser'
})
export class FilterUserPipe implements PipeTransform {

  transform(Users: Users[], filterText: string): Users[] {
    if (filterText.length === 0) {
      return Users;
    }

    filterText.toLowerCase();
    return Users.filter((User) => {
      return User.user_email.toLowerCase().includes(filterText)
        || User.user_name.toLowerCase().includes(filterText);
    });
  }

}
