export abstract class Tools {
  public static getAvatar(user: IUser): string {
    return user.avatar || '/static/img/avatars/default.png'
  }
}
