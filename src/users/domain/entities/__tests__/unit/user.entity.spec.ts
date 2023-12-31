import { UserDataBuilder } from '@/users/domain/testing/helpers/user-data-builder';
import { UserEntity, UserProps } from '../../user.entity';

describe('User entity unit test', () => {
  let props: UserProps;
  let sut: UserEntity;

  beforeEach(() => {
    UserEntity.validate = jest.fn();
    props = UserDataBuilder({});
    sut = new UserEntity(props);
  });

  it('constructor method', () => {
    expect(UserEntity.validate).toHaveBeenCalled();
    expect(sut.props.name).toBe(props.name);
    expect(sut.props.email).toBe(props.email);
    expect(sut.props.password).toBe(props.password);
    expect(sut.props.createdAt).toBeInstanceOf(Date);
  });

  it('getter of name field', () => {
    expect(sut.props.name).toBeDefined();
    expect(sut.props.name).toEqual(props.name);
    expect(typeof sut.props.name).toBe('string');
  });

  it('setter of name field', () => {
    sut['name'] = 'other name';
    expect(sut.props.name).toEqual('other name');
    expect(typeof sut.props.name).toBe('string');
  });

  it('getter of email field', () => {
    expect(sut.props.email).toBeDefined();
    expect(sut.props.email).toEqual(props.email);
    expect(typeof sut.props.email).toBe('string');
  });

  it('getter of password field', () => {
    expect(sut.props.password).toBeDefined();
    expect(sut.props.password).toEqual(props.password);
    expect(typeof sut.props.password).toBe('string');
  });

  it('setter of password field', () => {
    sut['password'] = 'other password';
    expect(sut.props.password).toEqual('other password');
    expect(typeof sut.props.name).toBe('string');
  });

  it('getter of createdAt field', () => {
    expect(sut.props.createdAt).toBeDefined();
    expect(sut.props.createdAt).toBeInstanceOf(Date);
  });

  it('should update an user', () => {
    // expect(UserEntity.validate).toHaveBeenCalled();
    sut.update('other name');
    expect(sut.props.name).toEqual('other name');
  });

  it('should update an password', () => {
    // expect(UserEntity.validate).toHaveBeenCalled();
    sut.updatePassword('other password');
    expect(sut.props.password).toEqual('other password');
  });
});
