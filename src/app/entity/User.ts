import { JsonObject, JsonProperty } from 'json2typescript';

import { Event } from './Event';

@JsonObject
export class User {
  @JsonProperty("firstName", String)
  firstName: string = undefined;

  @JsonProperty("lastName", String)
  lastName: string = undefined;

  @JsonProperty("email", String)
  email: string = undefined;

  @JsonProperty("phoneNumber", Number)
  phoneNumber: number = undefined;

  @JsonProperty("admin", Boolean)
  admin: boolean = undefined;

  @JsonProperty("slug", String)
  slug: string = undefined;

  @JsonProperty("events", [Event])
  events: Event[] = undefined;
}
