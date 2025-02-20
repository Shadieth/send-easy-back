import { Injectable, NotFoundException } from "@nestjs/common";
import { UserRepository } from "../users.repository";

@Injectable()
export class DeleteUserByIdService {
  constructor(private readonly userRepository: UserRepository) {}

  async deleteUserById(id: string): Promise<void> {
    const user = await this.userRepository.findById(id);

    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }

    await this.userRepository.deleteUserById(id);
  }
}


