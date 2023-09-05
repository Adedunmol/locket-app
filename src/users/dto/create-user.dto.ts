import { IsString, IsNotEmpty, MaxLength, MinLength } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    country_code: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @MaxLength(25)
    phone_number: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    password: string;
}
