import {AbstractService} from '../abstract.service';

export class AbstractAdminService extends AbstractService {
  ADMIN_API_URL = `${this.API_URL}/user-admin`;
}
